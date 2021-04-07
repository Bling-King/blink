const { Client, Message, MessageEmbed } = require("discord.js");

module.exports.run = async (Client, message, args, prefix) => {
  if(!message.content.startsWith(prefix)) return
   const owner = Client.users.cache.get('816097991840104498');

    const query = args.join(" ");
    if(!query) return message.reply('Please tell me a bug.')

    const reportEmbed = new MessageEmbed()
    .setTitle(`New BUG!`)
    .addField('Author', message.author.toString(), true)
    .addField('Guild', message.guild.name, true)
    .addField('Report', query)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setColor('BLUE')
    .setTimestamp();

    owner.send(reportEmbed)
    message.channel.send(
      new MessageEmbed()
      .setDescription('Thanks For Reporting a bug!')
      .setColor('GREEN')
    )
  }
module.exports.help = {
    name: 'report-bug',
    aliases: []
}