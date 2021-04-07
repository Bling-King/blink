const discord = require('discord.js')


module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;


    const embed = new discord.MessageEmbed()
    .setTitle(':mailbox_with_mail: Need help? Here are all of my commands:') // sets the title for the embed
    .setDescription('Use `m.help` followed by a command name to get more additional information on a command.') // sets the description
    .setColor('RANDOM') // color
    .setFooter(`Requested by ${message.author.tag}`) // sets a footer
    .addFields(
        { name: 'Admin', value: '`ban` ,`unban` ,`kick` ,`nuke` ,`purge` ,`reactionrole` ,`say` ,`nickname` ,`lock` ,`unlock` ,`slowmode` ,`warn` ,`warnings` ,`reset-warnings` ,`mute` ,`unmute`'}, // Fields, inline: true mean they will be in the same line
        { name: 'Fun', value: '`meme` ,`affect` ,`beautiful` ,`blur` ,`circle` ,`facepalm` ,`gay` ,`greyscale` ,`hitler` ,`invert` ,`jail` ,`ohno` ,`rip` ,`sepia` ,`shit` ,`trash` ,`triggered` ,`wanted` ,`wasted` ,`clyde` ,`hack` ,`punch` ,`hug` ,`neko` ,`tweet` ,`smug` ,`petpet` ,`turtle` ,`sock` ,`toilet` ,`diceroll` ,`pp` ,`monkey` ,`fart` ,`simprate` ,`ship` ,`iphonex` ,`waifu`'},
        { name: 'Games', value: '`hangman` ,`rps` , `trivia` ,`minigame`'},
        { name: 'Info', value: '`botinfo` ,`serverinfo` ,`userinfo` ,`serverroles` ,`invite` ,`support` ,`report-bug` ,`weather` ,`worldclock` `membercount`'},
        { name: 'Misc', value: '`covid` ,`ping` ,`poll` ,`avatar` ,`afk` ,`calculate` ,`emojify` ,`wiki` ,`steal-emoji`, `dm`, `invitestrack` ,`google` ,`anime-search` ,`pokemon`'},
        { name: 'Music', value: '`play` ,`stop` ,`pause` ,`resume` ,`skip` ,`volume` ,`loop` ,`queue` ,`lyrics`'})
    .setTimestamp() // put when the msg got sent
    

    message.channel.send(embed) // sends the embed

}


module.exports.help = {
    name: `help`,
    aliases: []
};