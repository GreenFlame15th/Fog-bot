const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();
const prefix = process.env.PREFIX;

client.on("ready", () => {
  console.log("Connected!");
  client.user.setPresence({
    status: "online",
    game: { name: "Flames of Green is my home" }
  });
});

client.login(process.env.TOKEN)

app.get("/", (request, response) => {
  console.log("Ping received!");
  response.sendStatus(200);
  let commandFile = require(`./available.js`);
  commandFile.run(client);
});
// This keeps the bot running 24/7
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("message", message => {
  if (message.guild.id == 582189274082836511) {
    //bump loger
    if (
      (message.content.toLowerCase().startsWith("!d bump") &&
        !message.author.bot) ||
      (message.author.id == 261441087082594304 &&
        message.content.startsWith("test bump"))
    ) {
      try {
        let commandFile = require(`./bump.js`);
        commandFile.run(client, message);
      } catch (err) {
        console.error(err);
      }
    }

    //say commamd cam be used anywhere and allow talking as the bot
    if (
      !message.author.bot &&
      message.member.hasPermission(["MANAGE_MESSAGES"]) &&
      message.content.toLowerCase().startsWith(`${prefix} say `)
    ) {
      String.prototype.replaceAll = function(search, replacement, target) {
        return target.split(search).join(replacement);
      };
      const str = message.content
        .slice(prefix.length + 5)
        .replace(/<megu>/g, "<a:Megumin:651736322121269248>") //1
        .replace(/<cat>/g, ">^•^<")
        .replace(/<flag>/g, "<a:flag:652042454979182602>")
        .replace(/<skirt>/g, "<a:skirt:653251111989542963>") //5
        .replace(/<p>/g, "<@&650772252799008779>")
        .replace(/<hoody>/g, "<a:hoody:653986537335291914>") //7
        .replace(/<<>/g, "<")
        .replace(/<>>/g, ">");
      //run command goes here
      

      message.channel.send(str);
      message.delete(1000);
    } else {
      
     if (
      !message.author.bot &&
      message.member.hasPermission(["MANAGE_MESSAGES"]) &&
      message.content.toLowerCase().startsWith(`${prefix} run `)
    )
     {
        // This is the best way to define args. Trust me.
        const args = message.content
          .slice(prefix.length+4)
          .trim()
          .split(/ +/g);
        const command = args.shift().toLowerCase();

        // The list of if/else is replaced with those simple 2 lines:
        try {
          let commandFile = require(`./commands/${command}.js`);
          commandFile.run(client, message, args);
        } catch (err) {
          console.error(err);
        }
       return;
      } 
      
      
      //list of channels for wor works in
      let channels = [
        "648042254031912971", //test
        "630827093911142411", //bot spam
        "646419802482802689", //log-of-welcomes
        "582189274082836513", //general
        "648225613844316164", //daily-convo
        "647819526691618839", //gay-memes
        "648220812146376714", //save chat
        "647029733586108416", //green harem
        "719972685748371537", //no evil
        "650784305504583690", //maids harem
        "650463911866531874", //daily-convo nsfw
        "646393268048887808", //RP-gen
        "647877589234352198", //RP-gen nsfw
        "648538492019933197", //cute girl nsw
        "646281236670709760", //nsfw stuff
        "647070044806840330", //green good
        "651108859494006805", //nsfw general
        "647850644920729647", //profiles
        "654408291190833172", //erza harem
        "668394247241728016", //anime
        "653303905102463017", //mod bot spam
        "679412479616483335", //geak out
        "664875890039324733", //vc no mic
        "693421009927274526", //her harem nsfw
        "676550907630190592", //Erza harem
        "693877510617825351", //date talk nsfw
        "693879871457198200", //date talk sfw
        "693390972133965905", //talk as maid
        "693415569315201027" //talks as maid v2
      ];
      if (!channels.includes(message.channel.id)) {
        return;
      }

      //looks for commands from humans
      if (message.author.bot) return;
      if (
        message.content.toLowerCase().indexOf(prefix) == 0 &&
        (message.channel.id == 630827093911142411 || //bot spam
        message.channel.id == 653303905102463017 || //mod bot spam
        message.channel.id == 693390972133965905 || //talk as maid
         message.channel.id == 693415569315201027 || //talk as maid vs 2
          message.channel.id == 648042254031912971) //test
      ) {
        // This is the best way to define args. Trust me.
        const args = message.content
          .slice(prefix.length)
          .trim()
          .split(/ +/g);
        const command = args.shift().toLowerCase();

        // The list of if/else is replaced with those simple 2 lines:
        try {
          let commandFile = require(`./commands/${command}.js`);
          commandFile.run(client, message, args);
        } catch (err) {
          console.error(err);
        }
      } else {
        if (
          message.channel.id == 630827093911142411 ||
          message.content.startsWith(prefix)
        ) {
          return;
        } else {
          if (
            (message.channel.id == 719972685748371537 || //scary chat
            message.channel.id == 647850644920729647 || // profile
              message.channel.id == 646419802482802689) && //log of walcomes
            message.content.toLowerCase().startsWith(`welcome`)
          ) {
            let commandFile = require(`./welcome.js`);
            commandFile.run(client, message);
          }

          //don't want other replies in porfiles
          if (message.channel.id == 647850644920729647) {
            return;
          }
          //special case for #talk as maid
          if (message.channel.id == 693390972133965905 || message.channel.id == 693415569315201027) {
            let commandFile = require(`./commands/talk.js`);
            commandFile.run(client, message);
            return;
          }
          //run kerwords.js, aka a keyword react system
          let commandFile = require(`./keyword.js`);
          commandFile.run(client, message);
        }
      }
    }
  }
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  let commandFile = require(`./roles.js`);
  commandFile.run(client, oldMember, newMember);
});

console.log("Relouded!");

//keep the bot doing something to prevent time out
async function boop() {
  setTimeout(() => {
    boop();
    console.log("boop");
  }, 60 * 1000);
}

boop();
