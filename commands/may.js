const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if (message.author.id != 261441087082594304) {message.channel.send("Sorry you aren't the boss!"); return;}
  
  const now = await Date.now();

  const no = JSON.stringify(true);
  fs.writeFile("./may.json", no, null);

  const add = JSON.stringify(now);
  fs.writeFile("./time.json", add, null);
};
