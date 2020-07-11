const Discord = module.require("discord.js");
const fs = require("fs");

const { Client } = require("unb-api");
const token = process.env.UTOKEN;
const umb = new Client(token);

module.exports.run = async (client, message, args) => {
  const id = args[0].slice(2, -1);

  if (message.guild.channels.map(cha => cha.id).includes(id) == false) {
    message.channel.send(`${args[0]} is not a valid channel`);
    return;
  }

  const guildID = message.guild.id;
  const userID = message.author.id;
  let money = "Not a bal";

  await umb
    .getUserBalance(guildID, userID)
    .then(user => (money = user.cash + user.bank));

  if (money >= 200) {
    
    message.channel.send("Sending a NoU card");
    
    umb.editUserBalance(guildID, userID, { cash: -200 }, "Buying NoU");

    const noU = new Discord.RichEmbed()
      .setColor("#339966")
      .setTitle("No U")
      .setImage(
        "https://cdn.glitch.com/b3ddd66c-82ea-4a5e-8727-5c35e4572a33%2FNo%20u%2C%20are%20gay.png?v=1585211622820"
      );

    message.mentions.channels.first().send(noU);
  } else {
    message.channel.send("You need at lest 200 <:GreenFlame:650794712269193264> to send a NoU card");
  }
};
