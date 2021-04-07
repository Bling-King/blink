const { Client, Message, MessageAttachment } = require("discord.js");

module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
  message.channel.send("Hacking...").then((message) => {
    const cords = ["90.0000° N, 135.0000° W", "90.0000° S, 45.0000° E"];
    message.edit("Still Hacking....");
    message.edit("Close to Completion");
    message.edit("Hacked!! Location: ``90.0000° S, 45.0000° E``");
  });
  message.channel.send("Finding Passwords...").then((message) => {
    message.edit("Finding Logging Info..");
    message.edit("Still Finding.....");
    message.edit("They have VPN");
    message.edit(
      "FOUND! ``Login : skibop124@gmail.com, Password : IamSuperCool!``"
    );
  });
  message.channel.send("Finding Credit Info...").then((message) => {
    message.edit("Finding....");
    message.edit("Breaking Firewall...");
    message.edit("Creditnal Hacking Process Failed! We may be caught!");
    message.delete();
  });
  message.channel.send("Trying again....").then((message) => {
    message.edit("Hacking Bank...");
    message.edit(
      "Cracked! ``Number : 5434 2960 4921 9010, Name : John, MasterCard``"
    );
  });
}

module.exports.help = {
    name: 'hack',
    aliases: []
}
