const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (Client, message, args, prefix) => { // for my cmds handler

    if(!message.content.startsWith(prefix)) return;
    const resfact = await (await fetch("https://api.monkedev.com/facts/monkey?key=")).json(); // you have to get a key from the monkedev discord server and add it after the key=
    const resimage = await (await fetch("https://api.monkedev.com/attachments/monkey?key=")).json();
        const monkeyEmbed = new Discord.MessageEmbed()
        .setTitle('Monkey fact')
        .setDescription(resfact.fact)
        .setImage(resimage.url)
        .setColor("#ff7100")
        .setURL("https://api.monkedev.com/docs/")

        message.channel.send(monkeyEmbed)
}

module.exports.help = {
    name: "monkey"
}