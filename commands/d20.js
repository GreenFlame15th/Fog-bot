const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  
  


  message.channel.send(Math.floor(Math.random() * 20)+1);
  
};

