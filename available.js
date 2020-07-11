const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client) => {
  
  const gtime = fs.readFileSync("./time.json");
  const gmay = fs.readFileSync("./may.json");
  const time = JSON.parse(gtime);
  const may = JSON.parse(gmay);
  const now = await Date.now();

  if (now - time > 2 * 60 * 60 * 1000) {
    
    if (may) {
      const channel = await client.channels.get("650319453543989279");
      channel.send("Bump is available! You may bump us at <#630827093911142411> with ```!d bump```");
    const add = JSON.stringify(false);
    fs.writeFile("./may.json", add, null);
    }
   else {
    
    console.log("Reminder send");
    
  }
} else {console.log("No bump available");}

}