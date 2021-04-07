const { Message, MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder")
module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
  if (!args[0]) return message.channel.send(`Please specify a song.`)

        try {
            const title = args.join(" ")

            let lyrics = await lyricsFinder(title) || `Lyrics to that song was not found.`;

            const embed = new MessageEmbed()
            .setTitle(`Lyrics for ${title}`)
            .setColor("RANDOM")
            .setDescription(lyrics, {
                split: true,
                 })
                message.channel.send({ embed: embed });
                
            
        } catch (error) {
            message.reply(`An error had occured: ${error}`)
        }
    }

module.exports.help = {
    name: 'lyrics',
    aliases: []
}