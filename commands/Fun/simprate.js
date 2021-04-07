const { MessageEmbed } = require("discord.js")

module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("SIMP R4TE")
        .setDescription(`${user}'s simprate is ${rate}%`)
        .setTimestamp()
        .setFooter()

        message.channel.send(embed)
}

      module.exports.help = {
        name: "simprate",
        description: "",
        usage: "",
        accessableby: "Members",
        aliases: []
    }