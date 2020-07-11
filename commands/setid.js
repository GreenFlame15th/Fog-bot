const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) {message.channel.send("Manage Message permission requierd"); return;}
  
    const id = args[0];

  if (message.guild.channels.map(cha => cha.id).includes(id) == false) {
    message.channel.send(`${args[0]} is not a valid channel`);
    return;
  }

 const jid = await JSON.stringify(id);
  fs.writeFile("./id.json", jid, null);
  
  message.channel.send(`I will now talk in <#${id}>`);
  
 client.channels.find(c => c.id == 693390972133965905).setTopic(`Talking in <#${id}>`, `Now I talk in <#${id}>`)
client.channels.find(c => c.id == 693415569315201027).setTopic(`Talking in <#${id}>`, `Now I talk in <#${id}>`)

};
