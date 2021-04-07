const { Client, Message, MessageAttachment } = require("discord.js");
const { Canvas } = require("canvacord");

module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
  
  const user = message.mentions.users.first() || message.author;
    
    const avatar = user.displayAvatarURL({ format: "png"});
    
    const image = await Canvas.greyscale(avatar);
    
    message.channel.send(new MessageAttachment(image, "image.gif"));
}
module.exports.help = {
    name: 'greyscale',
    aliases: []
}