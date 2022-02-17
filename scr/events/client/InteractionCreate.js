const { MessageActionRow, MessageButton } = require('discord.js')
const Event = require('../../estrutura/Event')
const wait = require('util').promisify(setTimeout);

module.exports = class extends Event {
    constructor(client) {
    super (client, {
        name: 'interactionCreate'
    })

}

run = (interaction) => {
    if (interaction.isCommand()) {
        const cmd = this.client.commands.find(c => c.name === interaction.commandName)

        if (cmd) cmd.run(interaction)
    }

    else if (interaction.isButton()) {

        if (interaction.customId === 'fechar_entrevista') {
      
    
             interaction.reply({content: `Esse canal será deletado em 10 segundos.`})
    
            setTimeout(() => {
                interaction.editReply({content: `Esse canal será deletado em 9 segundos.`})

                setTimeout(() => {
                    interaction.editReply({content: `Esse canal será deletado em 8 segundos.`})

                    setTimeout(() => {
                        interaction.editReply({content: `Esse canal será deletado em 7 segundos.`})

                        setTimeout(() => {
                            interaction.editReply({content: `Esse canal será deletado em 6 segundos.`})

                            setTimeout(() => {
                                interaction.editReply({content: `Esse canal será deletado em 5 segundos.`})

                                setTimeout(() => {
                                    interaction.editReply({content: `Esse canal será deletado em 4 segundos.`})
                                    setTimeout(() => {
                                        interaction.editReply({content: `Esse canal será deletado em 3 segundos.`})
                                        setTimeout(() => {
                                            interaction.editReply({content: `Esse canal será deletado em 2 segundos.`})
                                            setTimeout(() => {
                                                interaction.editReply({content: `Esse canal será deletado em 1 segundos.`})

                                                setTimeout(() => {
                                                    interaction.channel.delete()
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
    
        
    
        
            }
        }

    else if (interaction.isSelectMenu()) {
        

        if (interaction.customId === 'area_staff') {
       

            if (interaction.values[0] === 'parcerias') {

                let buscar = interaction.guild.channels.cache.find(c => c.name === `e-${interaction.user.id}`)

                if (!buscar) {

                    interaction.guild.channels.create(`e-${interaction.user.id}`, {
                        type: 'GUILD_TEXT',
	                        permissionOverwrites: [
		                        {
			                        id: interaction.guild.id,
			                        deny: ['VIEW_CHANNEL'],
		                        },
		                        {
			                        id: interaction.user.id,
			                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
		                        },
                        	],
                    }).then(channel => {
                        interaction.reply({content: `Seu canal para entrevista foi aberto. (${channel})`, ephemeral: true})

                        let fechar = new MessageActionRow().addComponents(
                            new MessageButton()
                            .setCustomId('fechar_entrevista')
                            .setLabel('Fechar Entrevista')
                            .setStyle('DANGER')
                        )
                        channel.send({content: `Aguarde nossa equipe te entrevistar.`, components: [fechar]})


                })

                }

                else {
                    interaction.reply({content: `Você já tem um canal de entrevista aberto. (${buscar})`, ephemeral: true})
                }
            }

            
      
       

            if (interaction.values[0] === 'eventos') {

                let buscar = interaction.guild.channels.cache.find(c => c.name === `e-${interaction.user.id}`)

                if (!buscar) {

                    interaction.guild.channels.create(`e-${interaction.user.id}`, {
                        type: 'GUILD_TEXT',
	                        permissionOverwrites: [
		                        {
			                        id: interaction.guild.id,
			                        deny: ['VIEW_CHANNEL'],
		                        },
		                        {
			                        id: interaction.user.id,
			                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
		                        },
                        	],
                    }).then(channel => {
                        interaction.reply({content: `Seu canal para entrevista foi aberto. (${channel})`, ephemeral: true})

                        let fechar = new MessageActionRow().addComponents(
                            new MessageButton()
                            .setCustomId('fechar_entrevista')
                            .setLabel('Fechar Entrevista')
                            .setStyle('DANGER')
                        )
                        channel.send({content: `Aguarde nossa equipe te entrevistar.`, components: [fechar]})


                })

                }

                else {
                    interaction.reply({content: `Você já tem um canal de entrevista aberto. (${buscar})`, ephemeral: true})
                }
            }


            if (interaction.values[0] === 'designer') {

                let buscar = interaction.guild.channels.cache.find(c => c.name === `e-${interaction.user.id}`)

                if (!buscar) {

                    interaction.guild.channels.create(`e-${interaction.user.id}`, {
                        type: 'GUILD_TEXT',
	                        permissionOverwrites: [
		                        {
			                        id: interaction.guild.id,
			                        deny: ['VIEW_CHANNEL'],
		                        },
		                        {
			                        id: interaction.user.id,
			                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
		                        },
                        	],
                    }).then(channel => {
                        interaction.reply({content: `Seu canal para entrevista foi aberto. (${channel})`, ephemeral: true})

                        let fechar = new MessageActionRow().addComponents(
                            new MessageButton()
                            .setCustomId('fechar_entrevista')
                            .setLabel('Fechar Entrevista')
                            .setStyle('DANGER')
                        )
                        channel.send({content: `Aguarde nossa equipe te entrevistar.`, components: [fechar]})


                })

                }

                else {
                    interaction.reply({content: `Você já tem um canal de entrevista aberto. (${buscar})`, ephemeral: true})
                }
            }

            if (interaction.values[0] === 'mov_chat') {

                let buscar = interaction.guild.channels.cache.find(c => c.name === `e-${interaction.user.id}`)

                if (!buscar) {

                    interaction.guild.channels.create(`e-${interaction.user.id}`, {
                        type: 'GUILD_TEXT',
	                        permissionOverwrites: [
		                        {
			                        id: interaction.guild.id,
			                        deny: ['VIEW_CHANNEL'],
		                        },
		                        {
			                        id: interaction.user.id,
			                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
		                        },
                        	],
                    }).then(channel => {
                        interaction.reply({content: `Seu canal para entrevista foi aberto. (${channel})`, ephemeral: true})

                        let fechar = new MessageActionRow().addComponents(
                            new MessageButton()
                            .setCustomId('fechar_entrevista')
                            .setLabel('Fechar Entrevista')
                            .setStyle('DANGER')
                        )
                        channel.send({content: `Aguarde nossa equipe te entrevistar.`, components: [fechar]})


                })

                }

                else {
                    interaction.reply({content: `Você já tem um canal de entrevista aberto. (${buscar})`, ephemeral: true})
                }
            }

            if (interaction.values[0] === 'mov_Call') {

                let buscar = interaction.guild.channels.cache.find(c => c.name === `e-${interaction.user.id}`)

                if (!buscar) {

                    interaction.guild.channels.create(`e-${interaction.user.id}`, {
                        type: 'GUILD_TEXT',
	                        permissionOverwrites: [
		                        {
			                        id: interaction.guild.id,
			                        deny: ['VIEW_CHANNEL'],
		                        },
		                        {
			                        id: interaction.user.id,
			                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
		                        },
                        	],
                    }).then(channel => {
                        interaction.reply({content: `Seu canal para entrevista foi aberto. (${channel})`, ephemeral: true})

                        let fechar = new MessageActionRow().addComponents(
                            new MessageButton()
                            .setCustomId('fechar_entrevista')
                            .setLabel('Fechar Entrevista')
                            .setStyle('DANGER')
                        )
                        channel.send({content: `Aguarde nossa equipe te entrevistar.`, components: [fechar]})


                })

                }

                else {
                    interaction.reply({content: `Você já tem um canal de entrevista aberto. (${buscar})`, ephemeral: true})
                }
            }

            if (interaction.values[0] === 'decorations') {

                let buscar = interaction.guild.channels.cache.find(c => c.name === `e-${interaction.user.id}`)

                if (!buscar) {

                    interaction.guild.channels.create(`e-${interaction.user.id}`, {
                        type: 'GUILD_TEXT',
	                        permissionOverwrites: [
		                        {
			                        id: interaction.guild.id,
			                        deny: ['VIEW_CHANNEL'],
		                        },
		                        {
			                        id: interaction.user.id,
			                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
		                        },
                        	],
                    }).then(channel => {
                        interaction.reply({content: `Seu canal para entrevista foi aberto. (${channel})`, ephemeral: true})

                        let fechar = new MessageActionRow().addComponents(
                            new MessageButton()
                            .setCustomId('fechar_entrevista')
                            .setLabel('Fechar Entrevista')
                            .setStyle('DANGER')
                        )
                        channel.send({content: `Aguarde nossa equipe te entrevistar.`, components: [fechar]})


                })

                }

                else {
                    interaction.reply({content: `Você já tem um canal de entrevista aberto. (${buscar})`, ephemeral: true})
                }
            }

            if (interaction.values[0] === 'cinema') {

                let buscar = interaction.guild.channels.cache.find(c => c.name === `e-${interaction.user.id}`)

                if (!buscar) {

                    interaction.guild.channels.create(`e-${interaction.user.id}`, {
                        type: 'GUILD_TEXT',
	                        permissionOverwrites: [
		                        {
			                        id: interaction.guild.id,
			                        deny: ['VIEW_CHANNEL'],
		                        },
		                        {
			                        id: interaction.user.id,
			                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
		                        },
                        	],
                    }).then(channel => {
                        interaction.reply({content: `Seu canal para entrevista foi aberto. (${channel})`, ephemeral: true})

                        let fechar = new MessageActionRow().addComponents(
                            new MessageButton()
                            .setCustomId('fechar_entrevista')
                            .setLabel('Fechar Entrevista')
                            .setStyle('DANGER')
                        )
                        channel.send({content: `Aguarde nossa equipe te entrevistar.`, components: [fechar]})


                })

                }

                else {
                    interaction.reply({content: `Você já tem um canal de entrevista aberto. (${buscar})`, ephemeral: true})
                }
            }

            if (interaction.values[0] === 'jornalista') {

                let buscar = interaction.guild.channels.cache.find(c => c.name === `e-${interaction.user.id}`)

                if (!buscar) {

                    interaction.guild.channels.create(`e-${interaction.user.id}`, {
                        type: 'GUILD_TEXT',
	                        permissionOverwrites: [
		                        {
			                        id: interaction.guild.id,
			                        deny: ['VIEW_CHANNEL'],
		                        },
		                        {
			                        id: interaction.user.id,
			                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
		                        },
                        	],
                    }).then(channel => {
                        interaction.reply({content: `Seu canal para entrevista foi aberto. (${channel})`, ephemeral: true})

                        let fechar = new MessageActionRow().addComponents(
                            new MessageButton()
                            .setCustomId('fechar_entrevista')
                            .setLabel('Fechar Entrevista')
                            .setStyle('DANGER')
                        )
                        channel.send({content: `Aguarde nossa equipe te entrevistar.`, components: [fechar]})


                })

                }

                else {
                    interaction.reply({content: `Você já tem um canal de entrevista aberto. (${buscar})`, ephemeral: true})
                }
            }

            if (interaction.values[0] === 'sorteio') {

                let buscar = interaction.guild.channels.cache.find(c => c.name === `e-${interaction.user.id}`)

                if (!buscar) {

                    interaction.guild.channels.create(`e-${interaction.user.id}`, {
                        type: 'GUILD_TEXT',
	                        permissionOverwrites: [
		                        {
			                        id: interaction.guild.id,
			                        deny: ['VIEW_CHANNEL'],
		                        },
		                        {
			                        id: interaction.user.id,
			                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
		                        },
                        	],
                    }).then(channel => {
                        interaction.reply({content: `Seu canal para entrevista foi aberto. (${channel})`, ephemeral: true})

                        let fechar = new MessageActionRow().addComponents(
                            new MessageButton()
                            .setCustomId('fechar_entrevista')
                            .setLabel('Fechar Entrevista')
                            .setStyle('DANGER')
                        )
                        channel.send({content: `Aguarde nossa equipe te entrevistar.`, components: [fechar]})


                })

                }

                else {
                    interaction.reply({content: `Você já tem um canal de entrevista aberto. (${buscar})`, ephemeral: true})
                }
            }

        }

    


    
}
}}
