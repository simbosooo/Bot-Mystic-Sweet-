const Command = require('../../estrutura/Command')
const {  MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const db = require('../../database/models/punicao')

module.exports = class extends Command  {
    constructor (client) {
        super (client, {
            name: 'mute',
            description: 'muta o membro escolhido',
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

                {
                    name: 'tempo',
                    description: 'tempo do mute',
                    type: 'NUMBER',
                    min_value: 1,
                    required: true
                }
            ]
        })
    }
    run = async (interaction) => {
        const autor = interaction.user
        const usuario = interaction.options.getUser('membro')
        const tempo = interaction.options.getNumber('tempo')

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

        if (mod.permissions.has('MUTE_MEMBERS')) {

            let pag1 = new MessageEmbed()
            .setDescription(`O mute de ${membro} será em`)
            .setColor('WHITE')

            let opcs1 = new MessageActionRow().addComponents(
                new MessageButton()
                .setCustomId('minutos')
                .setLabel('Minutos')
                .setStyle('PRIMARY'),

                new MessageButton()
                .setCustomId('horas')
                .setLabel('Horas')
                .setStyle('PRIMARY'),
            )
            
            interaction.reply({embeds: [pag1], components: [opcs1]}).then(msg => {
                
                 const filter = (b) => b.user.id === interaction.user.id
                const collector = interaction.channel.createMessageComponentCollector({ filter})

                collector.on('collect', async (i) => {
                    

                    if (i.customId === 'minutos') {
                      const  tempo_total = tempo * 60000

                     let pag2 = new MessageEmbed()
                     .setDescription(`**Membro a mutar:** ${membro}\n**Motivo:** ${motivo}\n**Tempo:** ${tempo} minuto(s)`)
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

                         interaction.editReply({embeds: [pag2], components: [opcs2]}).then(msg => {

                            collector.on('collect', async (i) => {

                                if (i.customId === 'sim') {

                                    let mod_editar = await db.findOneAndUpdate({
                                        userID: mod.id
                                    }, {
                                        $inc: {
                                            mutou: 1
                                        }
                                    })

                                    
                                    let membro_editar = await db.findOneAndUpdate({
                                        userID: mod.id
                                    }, {
                                        $inc: {
                                            totalmutes: 1
                                        }
                                    })

                                    let log = new MessageEmbed()
                                    .setDescription(`<:punish:940299495554547732> **Membro Mutado**\n\n<:user:940716663131742218> **Membro**\n\n**Menção:** ${membro}\n**ID:** ${membro.id}\n\n<:mod:940299495512612935> **Moderador:**\n**Menção:** ${mod}\n**ID:** ${mod.id}\n\n<:clock:940299495315484702> **Tempo:** ${tempo} Minuto(s)\n\n<:edit:940299495009288203> **Motivo:** ${motivo}`)
                                    .setColor('#ACD4FF')

                                    interaction.guild.channels.cache.get('937291631831429184').send({content: `${membro}`,embeds: [log]})

                                    membro.timeout(tempo_total)

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

                    if (i.customId === 'horas') {

                        const  tempo_total = tempo * 3600000

                        let pag2 = new MessageEmbed()
                        .setDescription(`**Membro a mutar:** ${membro}\n**Motivo:** ${motivo}\n**Tempo:** ${tempo} Horas(s)`)
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
   
                            interaction.editReply({embeds: [pag2], components: [opcs2]}).then(msg => {
   
                               collector.on('collect', async (i) => {
   
                                   if (i.customId === 'sim') {
   
                                       let mod_editar = await db.findOneAndUpdate({
                                           userID: mod.id
                                       }, {
                                           $inc: {
                                               mutou: 1
                                           }
                                       })
   
                                       
                                       let membro_editar = await db.findOneAndUpdate({
                                           userID: membro.id
                                       }, {
                                           $inc: {
                                               totalmutes: 1
                                           }
                                       })
   
                                       let log = new MessageEmbed()
                                       .setDescription(`<:punish:940299495554547732> **Membro Mutado**\n\n<:user:940716663131742218> **Membro**\n\n**Menção:** ${membro}\n**ID:** ${membro.id}\n\n<:mod:940299495512612935> **Moderador:**\n**Menção:** ${mod}\n**ID:** ${mod.id}\n\n<:clock:940299495315484702> **Tempo:** ${tempo} Hora(s)\n\n<:edit:940299495009288203> **Motivo:** ${motivo}`)
                                       .setColor('#ACD4FF')
   
                                       interaction.guild.channels.cache.get('937291631831429184').send({embeds: [log]})
   
                                       membro.timeout(tempo_total)
   
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
                })
            })
        }

        else {
            interaction.reply({content: `Sinto muito, mas você não pode usar esse comando`, ephemeral: true})
        }
    }
}
