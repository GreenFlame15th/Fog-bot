const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {


  message.channel.send("counting down 5 secounds");
  setTimeout(
  () => {
    message.channel.send("It is done");
  },
  5 * 1000
);
  
};

