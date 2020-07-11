const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {


  let i = (Math.floor(Math.random() * 21));
  if (i<10) message.channel.send(`Yes`);
  else if (i<20) message.channel.send(`No`);
  else message.channel.send(`Maybe`);
             
  
};

