const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
  
  const Data = await Random.GetAnimeImage({ Anime: "smug", Color: Color });
    
    return message.channel.send(Data);
}
module.exports.help = {
    name: 'smug',
    aliases: []
}