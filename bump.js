const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message) => {
  
  if(message.channel.id!=630827093911142411) {return}
  
  //get varables
  const gtime = fs.readFileSync("./time.json");
  const time = JSON.parse(gtime);
  const now = await Date.now();
  
  if (now - time < 2 * 60 * 60 * 1000) {
    message.channel.send("Your bump is charging.");
  } else {
        const channel = client.channels.get("650319453543989279");
       
      //timer
    setTimeout(() => {
               let commandFile = require(`./available.js`);
                commandFile.run(client);
      
    }, 2 * 60 * 60 * 1000);
    
      //record time
    const add = JSON.stringify(now);
    fs.writeFile("./time.json", add, null);
    
    const yes = JSON.stringify(true);
    fs.writeFile("./may.json", yes, null);
    
    message.channel.send("Thank you for bumping!");
    channel.send(channel.send(`The server was bumped by the awsome <@${message.author.id}> <:GreenFlame:650794712269193264> <:GreenFlame:650794712269193264> <:GreenFlame:650794712269193264>`))
  }
};
