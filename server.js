const Discord = require("discord.js");

const config = require("./config.json");

const MessageEmbed = require("discord.js");

const Client = new Discord.Client({ disableEveryone: true });

Client.commands = new Discord.Collection();

const fs = require("fs");

const prefix = "m.";

const db = require("quick.db");

const DisTube = require("distube");

const Canvacord = require("canvacord");

const ms = require("ms");

const fetch = require("node-fetch");

Client.aliases = new Discord.Collection();

Client.distube = new DisTube(Client, {
  searchSongs: false,
  emitNewSongOnly: false
});

Client.distube

  .on("playSong", (message, queue, song) => {
    let playingEmbed = new Discord.MessageEmbed()
      .setColor("#FFFF00")
      .setTitle(`🎵 Now Playing 🎵`)
      .setDescription(
        `[**${song.name} - ${song.formattedDuration}**](${song.url})`
      )
      .setFooter(`Requested by ${song.user.tag}`);
    message.channel.send(playingEmbed);
  })
  .on("addSong", (message, queue, song) => {
    let queueEmbed = new Discord.MessageEmbed()
      .setColor("#FFFF00")
      .setTitle(`✅ Added to the Queue ✅`)
      .setDescription(
        `[**${song.name} - ${song.formattedDuration}**](${song.url})`
      )
      .setFooter(`Requested by ${song.user.tag}`);
    message.channel.send(queueEmbed);
  })
  .on("playList", (message, queue, playlist, song) => {
    message.channel.send(
      `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\``
    );
  })
  .on("addList", (message, queue, playlist) =>
    message.channel.send(
      `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue`
    )
  )
  // DisTubeOptions.searchSongs = true
  .on("searchResult", (message, result) => {
    let i = 0;
    message.channel.send(
      `**Choose an option from below**\n${result
        .map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``)
        .join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`
    );
  })
  // DisTubeOptions.searchSongs = true
  .on("searchCancel", message =>
    message.channel.send(`**Searching canceled!**`)
  )
  .on("error", (message, e) => {
    console.error(e);
    message.channel.send("An error encountered: " + e);
  });

Client.on("ready", () => console.log("Distube is Active"));

// Commands Handler

// get into the cmds folder
fs.readdirSync("./commands/").forEach(dir => {
  //in the cmds folder, we gonna check for the category
  fs.readdir(`./commands/${dir}`, (err, files) => {
    // console log err (catch err)
    if (err) throw err;

    // checking if the files ends with .js if its a javascript file
    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    // if there is no cmds in the file it will return
    if (jsFiles.length <= 0) {
      console.log("Can't find any commands!");
      return;
    }

    jsFiles.forEach(file => {
      // console the loaded cmds
      var fileGet = require(`./commands/${dir}/${file}`);
      console.log(`File ${file} was loaded`);

      // gonna let the cmds run
      try {
        Client.commands.set(fileGet.help.name, fileGet);

        // it search in the cmds folder if there is any aliases
        fileGet.help.aliases.forEach(alias => {
          Client.aliases.set(alias, fileGet.help.name);
        });
      } catch (err) {
        // catch err in console
        return console.log(err);
      }
    });
  });
});

// The message that we will get in terminal when we lunch the bot
Client.on("ready", async () => {
  console.log(`${Client.user.username} is Online!`);

  // This Will be the Status Of our Bot
  Client.user.setActivity("for m.help", { type: "WATCHING" });
});

Client.on("message", async message => {
  if (message.author.Client || message.channel.type === "dm") return;

  // deleting his afk if he send a msg

  if (db.has(`afk-${message.author.id}+${message.guild.id}`)) {
    // if he has afk
    const oldReason = db.get(`afk-${message.author.id}+${message.guild.id}`); // get the reason
    await db.delete(`afk-${message.author.id}+${message.guild.id}`); // delete it after u get it
    message.reply(
      `You aren't afk anymore, that was the reason:\n ${oldReason}`
    ); // send this msg
  }

  // checking if someone mentioned the afk person

  if (message.mentions.members.first()) {
    // if someone mentioned the person
    if (
      db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)
    ) {
      // db will check if he is afk
      message.channel.send(
        message.mentions.members.first().user.tag +
          " : " +
          db.get(
            `afk-${message.mentions.members.first().id}+${message.guild.id}`
          )
      ); // if yes, it gets from the db the afk msg and send it
    }
  }

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  // it will make the cmd work with him orginal name and his aliases
  let commands =
    Client.commands.get(cmd.slice(prefix.length)) ||
    Client.commands.get(Client.aliases.get(cmd.slice(prefix.length)));

  if (commands) commands.run(Client, message, args, prefix);
});

// Login To Discord with your app's Token
Client.login(config.token);
