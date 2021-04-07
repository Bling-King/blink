const discord = require('discord.js')
const translate = require('@iamtraction/google-translate')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
  
  const query = args.join(" ");
  if (!query) return message.reply("Please specify a text to translate");
  
  const translated = await translate(query, { to: 'en' });
  message.channel.send(translated.text);
}

module.exports.help = {
    name: `translate`,
    aliases: []
};

//to: en
