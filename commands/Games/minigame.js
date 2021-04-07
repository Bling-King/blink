const minigames = require('@superphantomuser/discordjs-minigames');
//Shout out to my guy @superphantomuser
const { MessageEmbed } = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
   minigames.minigame(message, "unscramble /* This can be: repeat, unscramble, timing  */", {color: "FF69B4", before_time: 2000, after_time: 10000, message: "sloth! <winner> wins!", list: ["sloth", "slow", "lazy", "acedia"]});
}
module.exports.help = {
    name: 'minigame',
    aliases: []
}