const Discord = require("discord.js")
module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
    message.channel
    .send({embed: {description: "Uh i think **" + message.author.username +"** feels bad man", color: "RANDOM", timestamp: new Date()}})
    .then((msg) => {
      setTimeout(() => {
        msg.edit({embed: {description: `${message.author.username} are u ok? ur green at face 🤢`, color: "RANDOM", timestamp: new Date()}});
      }, 3000);
      setTimeout(() => {
        msg.edit({embed: {description: "dude? why are u vomiting???? :face_vomiting:", color: "RANDOM", timestamp: new Date()}});
      }, 6000);
      setTimeout(() => {
        msg.edit({embed: {description: `oh no no NO dont dont do it`, color: "RANDOM", timestamp: new Date()}});
      }, 9000);
      setTimeout(() => {
        msg.edit({embed: {description: `🤮💨`, color: "RANDOM", timestamp: new Date()}});
      }, 12000);
      setTimeout(() => {
        msg.edit({embed: {description: ":face_vomiting::dash::dash:", color: "RANDOM", timestamp: new Date()}});
      }, 13000);
      setTimeout(() => {
        msg.edit({embed: {description: ":face_vomiting::dash::dash::dash:", color: "RANDOM", timestamp: new Date()}});
      }, 14000);
      setTimeout(() => {
        msg.edit({embed: {description: ":face_vomiting::dash::dash::dash::dash:", color: "RANDOM", timestamp: new Date()}});
      }, 15000);
      setTimeout(() => {
        msg.edit({embed: {description: "the world have been expoled since " + `${message.author.username} has been farted on all. 👼👼`, color: "RANDOM", timestamp: new Date()}});
      }, 17000);
    });
}

module.exports.help = {
    name: "fart",
    description: "fart on all",
    usage: "/fart",
    accessableby: "Members",
    aliases: []
}