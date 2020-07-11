const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {


  message.channel.send("counting down 1m");
  setTimeout(
  () => {
    message.channel.send("It is done");
  },
  60 * 1000
);
  
};

