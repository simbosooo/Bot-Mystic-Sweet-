const { MessageEmbed } = require('discord.js')
const Event = require('../../estrutura/Event')

module.exports = class extends Event {
    constructor(client) {
    super (client, {
        name: 'guildMemberAdd'
    })

}

run = (member) => {

    let emb = new MessageEmbed()
    .setDescription(`⁀➷ \\🌸 : : **Welcome !** ${member}\n『\\🍶 』Eitaa obrigada amigo !! :  ˎˊ -\n╰╮ \\🧁 :  __Boas vindas membro novo!__`)
    .setImage('https://cdn.discordapp.com/attachments/937734869377749042/941851142722301983/345f1d6fe37b2491636dc82ad568e65c16b11da8r1-1024-232_hq.gif')
    .setColor('#ffc5eb')

    this.client.channels.cache.get('937291631986606130').send({content: `<@&937291631151972425>`, embeds: [emb]})
}
}
