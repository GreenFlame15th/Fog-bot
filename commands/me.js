const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  

  message.guild.fetchMember(message.author)
  .then(member => {
   
     message.channel.send(member.displayName);
    message.channel.send(message.author.tag);
    
  });
  
  
  
};

