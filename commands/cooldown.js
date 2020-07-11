const Discord = module.require("discord.js");
const fs = require("fs");
const humanizeDuration = module.require("humanize-duration");

module.exports.run = async (client, message, args) => {
  const gtime = fs.readFileSync("./time.json");
  const time = JSON.parse(gtime);
  const now = await Date.now();

  message.channel.send(
    `Next bump will be recorded in**:** ${humanizeDuration(
      (now - time) - (2 * 60 * 60 * 1000)
    )}`
  );

  let commandFile = require(`../available.js`);
  commandFile.run(client);
};
