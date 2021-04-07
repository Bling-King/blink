const discord = require('discord.js')


module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;


    const embed = new discord.MessageEmbed()
    .setColor('RANDOM')
    .addField("Invite Link", "[Click here to invite me](https://discord.com/api/oauth2/authorize?client_id=827463645218209823&permissions=8&scope=bot)")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, Client.user.displayAvatarURL())

    

    message.channel.send(embed) // sends the embed

}


module.exports.help = {
    name: `invite`,
    aliases: []
};