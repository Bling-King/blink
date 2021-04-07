const { Random } = require("something-random-on-discord")
const random = Random

module.exports.run = async (Client, message, args, prefix) => {
   if(!message.content.startsWith(prefix)) return
     let data = await random.getNeko()
   message.channel.send(data)
}

module.exports.help = {
    name: "neko", // name of the cmd
    aliases: [] // another names for the cmd
}