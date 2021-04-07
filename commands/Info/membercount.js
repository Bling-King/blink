const Discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
        let member = message.guild.members;
        let offline = member.cache.filter(m => m.user.presence.status === "offline").size,
            reg = member.cache.filter(m => !m.user.bot).size,
            online = member.cache.filter(m => m.user.presence.status === "online").size,
            idle = member.cache.filter(m => m.user.presence.status === "idle").size,
            dnd = member.cache.filter(m => m.user.presence.status === "dnd").size,
            inv = member.cache.filter(m => m.user.presence.status === 'invisible').size,
            robot = member.cache.filter(m => m.user.bot).size,
            total = message.guild.memberCount;
        const embed3 = new Discord.MessageEmbed()
            .setTitle(message.guild.name + ' Member Count')
            .setDescription(`Members: ${total}\n\n :busts_in_silhouette:  | **Regular Member:** ${reg}\n :robot: | **Bots:** ${robot}\n\n :green_circle: | **Online:** ${online}\n :yellow_circle: | **Idle:** ${idle}\n :red_circle: | **Do Not Disturb:** ${dnd}\n :black_circle: | **Offline:** ${offline}\n :white_circle: | **Invisible:** ${inv}`)
            .setColor(`RANDOM`)
            .setTimestamp(message.createdAt)
            .setFooter('Developer - קורן#0001', message.author.displayAvatarURL());


        message.channel.send(embed3)
    }

//copy from "namanop" 👇
module.exports.help = {
    name: "membercount",
    description: "Shows the total members in a server.",
    usage: "?membercount",
    accessableby: "Members",
    aliases: []
}