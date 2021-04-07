const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
  fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
            .then((res) => res.json())
            .then((data) => {
                let embed = new MessageEmbed()
                    .setTitle("Tweet!")
                    .setImage(data.message)
                    .setTimestamp()
                message.channel.send(embed)
            })
    }
module.exports.help = {
    name: 'tweet',
    aliases: []
}