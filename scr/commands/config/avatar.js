const Command = require('../../estrutura/Command')

module.exports = class extends Command {
    constructor (client) {
        super (client, {
            name: 'setavatar',
            description: 'Seta o avatar do bot',
            options: [
                {
                    name: 'url',
                    description: 'link da imagem',
                    type: 'STRING',
                    required: true
                }
            ]
        })
    }

    run = async (interaction) => {
        

        let avatar = interaction.options.getString('url')

        if (interaction.user.id === '849764232852537384') {

            this.client.user.setAvatar(avatar) 

            interaction.reply({content: `Meu avatar foi alterado com sucesso`, ephemeral: true})
        }


        else {
            interaction.reply({content: `Sinto muito, mas você não pode usar esse comando.`, ephemeral})
        }
    }
}
