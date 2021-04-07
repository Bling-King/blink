const { Client, Message, Util } = require('discord.js');
module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
  
  if(!args.length) return message.reply("Please specify some emojis!");
    
    for (const rawEmoji of args) {
      const parsedEmoji = Util.parseEmoji(rawEmoji);
      
      if (parsedEmoji.id) {
        
        const extension = parsedEmoji.animated ? ".gif" : ".png";
        const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + 
              extension}`;
        message.guild.emojis
          .create(url, parsedEmoji.name)
          .then((emoji) => message.channel.send(`Added: \`${emoji.url}\``));
      }
    }
  },

module.exports.help = {
    name: 'steal-emoji',
    aliases: []
}