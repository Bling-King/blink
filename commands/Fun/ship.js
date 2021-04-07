const { MessageEmbed } = require("discord.js")

module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
    let user = message.mentions.members.first();

    let user1 = message.mentions.members.last();
    
    let embed = new MessageEmbed()
    .setColor('RED')
    .setDescription(':x: Please specify a user to ship with!')
    if (!user) return message.channel.send(embed)

    let amounts = [
        '⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ 0%',
        '💖⬛⬛⬛⬛⬛⬛⬛⬛⬛ 10%',
        '💖💖⬛⬛⬛⬛⬛⬛⬛⬛ 20%',
        '💖💖💖⬛⬛⬛⬛⬛⬛⬛ 30%',
        '💖💖💖💖⬛⬛⬛⬛⬛⬛ 40%',
        '💖💖💖💖💖⬛⬛⬛⬛⬛ 50%',
        '💖💖💖💖💖💖⬛⬛⬛⬛ 60%',
        '💖💖💖💖💖💖💖⬛⬛⬛ 70%',
        '💖💖💖💖💖💖💖💖⬛⬛ 80%',
        '💖💖💖💖💖💖💖💖💖⬛ 90%',
        '💖💖💖💖💖💖💖💖💖💖 100%'
    ]

    let amount = (Math.floor(Math.random() * (amounts.length)));
        
    let loveEmbed = new MessageEmbed()
        .setColor('ff00f2')
        .setTitle('Shipping...')
        .setDescription(`Shipped ${user} and ${user1}!`)
        .addField(`**Ship Meter**`, amounts[amount])
    message.channel.send(loveEmbed)
}
module.exports.help = {
    name: "ship",
    description: "ur choice",
    usage: "ship <user1> <user2>",
    accessableby: "Members",
    aliases: []
}