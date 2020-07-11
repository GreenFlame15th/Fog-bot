const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {


  
    if (message.member.hasPermission(["MANAGE_MESSAGES"]) && args[0]){
    const channel = client.channels.get(args[0]);
        		  channel.send('I want huggies. >~<', {
   files: [{
      attachment: 'https://cdn.glitch.com/2fd2e9e8-8bda-40ad-85a4-757006e1d98e%2Fba209c20-692c-4da7-8b2a-339349ebedba.image.png?v=1576440165267',
      name: 'file.png'
   }]
})
  .catch(console.error);
     message.channel.send("Huggies send!")
    
  }
else
  {
      		  message.channel.send('I want huggies. >~<', {
   files: [{
      attachment: 'https://cdn.glitch.com/2fd2e9e8-8bda-40ad-85a4-757006e1d98e%2Fba209c20-692c-4da7-8b2a-339349ebedba.image.png?v=1576440165267',
      name: 'file.png'
   }]
})
  .catch(console.error);
    }
  
}
