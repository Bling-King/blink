const { Client, Message, MessageEmbed } = require("discord.js");

const fetch = require('node-fetch');

module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
  const text = args.join(' ');

    if (!text) return message.reply(`Please provide a text.`);

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`,
    ).then((res) => res.json());

    const embed = new MessageEmbed()
      .setImage(data.message)
      .setColor('RANDOM');

    message.reply(embed);
  }
module.exports.help = {
    name: 'clyde',
    aliases: []
}