const Command = require('../../estrutura/Command')

module.exports = class extends Command {
    constructor (client) {
        super (client, {
            name: 'setname',
            description: 'Seta o nome do bot',
            options: [
                {
                    name: 'nome',
                    description: 'novo nome do bot',
                    type: 'STRING',
                    required: true
                }
            ]
        })
    }

    run = async (client, interaction) => {
        let nome = interaction.options.getString('nome')

        if (interaction.user.id === '849764232852537384') {

         

            this.client.user.setUsername(nome) 

            interaction.reply({content: `Meu nome foi alterado com sucesso`, ephemeral: true})
        }

        else {
            interaction.reply({content: `Sinto muito, mas você não pode usar esse comando.`, ephemeral})
        }
    }
}
