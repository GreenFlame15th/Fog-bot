const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission(["MANAGE_MESSAGES"])) {message.channel.send("Manage Message permission requierd"); return;}
  
  const jid = await fs.readFileSync("./id.json");
  const id = JSON.parse(jid);
   
  
      const channel = client.channels.get(id);
    channel.send(message.content);
};

