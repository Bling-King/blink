const discord = require('discord.js')


module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;


    const embed = new discord.MessageEmbed()
    .setColor('RANDOM')
    .addField("Support", "[Click to join support Server](https://discord.gg/22vUCdWXQ3)")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, Client.user.displayAvatarURL())

    

    message.channel.send(embed) // sends the embed

}


module.exports.help = {
    name: `support`,
    aliases: []
};