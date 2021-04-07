const Discord = require('discord.js');
const superagent = require('superagent'); //npm

module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
      try {
            superagent
                .get("https://nekos.life/api/v2/img/waifu")
                .end((err, response) => {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Here's your Waifu")
                        .setDescription(message.author.toString())
                        .setImage(response.body.url)
                        .setColor('RANDOM')
                        .setTimestamp()
                        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed);
                })
                .catch(err =>
                    message.channel.send({
                        embed: {
                            color: RANDOM,
                            description: "Something went wrong... :cry:"
                        }
                    })
                );
        } catch (err) {
            console.log(err)
        }
    }
module.exports.help = {
    name: 'waifu',
    aliases: []
}