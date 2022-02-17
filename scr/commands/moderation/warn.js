const Command = require('../../estrutura/Command')
const {  MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const db = require('../../database/models/punicao')

module.exports = class extends Command  {
    constructor (client) {
        super (client, {
            name: 'warn',
            description: 'alerta o membro escolhido',
            options: [
                {
                    name: 'membro',
                    description: 'membro a mutar',
                    type: 'USER',
                    required: true
                },
                {
                    name: 'motivo',
                    description: 'motivo do mute',
                    type: 'STRING',
                    required: true
                },

            ]
        })
    }
    run = async (interaction) => {
        const autor = interaction.user
        const usuario = interaction.options.getUser('membro')
        const motivo = interaction.options.getString('motivo')

        const mod = interaction.guild.members.cache.get(autor.id)
        const membro = interaction.guild.members.cache.get(usuario.id)

        let mod_tem = await db.findOne({
            userID: mod.id
        })

        if (!mod_tem) {
            let criar = db.create({
                userID: mod.id,
                serverID: interaction.guild.id,
                totalbans: 0,
                totalwarns: 0, 
                totalmutes: 0,
                mutou: 0,
                advertiu: 0,
                baniu: 0
            })
        }
            
        let membro_tem = await db.findOne({
            userID: membro.id
        })

        if (!membro_tem) {
            let criar = db.create({
                userID: membro.id,
                serverID: interaction.guild.id,
                totalbans: 0,
                totalwarns: 0, 
                totalmutes: 0,
                mutou: 0,
                advertiu: 0,
                baniu: 0
            })
        }

        if (mod.permissions.has('KICK_MEMBERS')) {

                     let pag2 = new MessageEmbed()
                     .setDescription(`**Membro a avisar:** ${membro}\n**Motivo:** ${motivo}`)
                     .setColor('RED')

                     let opcs2 = new MessageActionRow().addComponents(
                         new MessageButton()
                         .setCustomId('sim')
                         .setLabel('Confirmar')
                         .setStyle('SUCCESS'),

                         new MessageButton()
                         .setCustomId('não')
                         .setLabel('Cancelar')
                         .setStyle('DANGER'),
                         )

                         interaction.reply({embeds: [pag2], components: [opcs2]}).then(msg => {

                            const filter = (b) => b.user.id === interaction.user.id
                            const collector = interaction.channel.createMessageComponentCollector({ filter})


                            collector.on('collect', async (i) => {


                                i.deferUpdate()

                                if (i.customId === 'sim') {

                                    let mod_editar = await db.findOneAndUpdate({
                                        userID: mod.id
                                    }, {
                                        $inc: {
                                            advertiu: 1
                                        }
                                    })

                                    
                                    let membro_editar = await db.findOneAndUpdate({
                                        userID: membro.id
                                    }, {
                                        $inc: {
                                            totalwarns: 1
                                        }
                                    })




                                    let database = await db.findOne({
                                        userID: membro.id
                                    })

                                    let log = new MessageEmbed()
                                    .setDescription(`<:punish:940299495554547732> **Membro Avisado**\n\n<:user:940716663131742218> **Membro**\n\n**Menção:** ${membro}\n**ID:** ${membro.id}\n\n<:mod:940299495512612935> **Moderador:**\n**Menção:** ${mod}\n**ID:** ${mod.id}\n\n<:clock:940299495315484702> **Total de warns:** ${database.totalwarns} \n\n<:edit:940299495009288203> **Motivo:** ${motivo}`)
                                    .setColor('#ACD4FF')

                                    interaction.guild.channels.cache.get('937291631831429184').send({content: `${membro}`, embeds: [log]})

                                    

                                    let pag3 = new MessageEmbed()
                                    .setDescription('Punição Concluída')
                                    .setColor('GREEN')

                                    interaction.editReply({embeds: [pag3], components: []})

                                }

                                if (i.customId === 'não') {
                                    let pag3 = new MessageEmbed()
                                    .setDescription('Punição cancelada')
                                    .setColor('RED')

                                    interaction.editReply({embeds: [pag3], components: []})

                                    
                                }
                            })
                         })

                     
                    }              
                
    }
}
