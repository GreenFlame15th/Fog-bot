const Discord = module.require("discord.js");

module.exports.run = async (client, message) => {
  

                    let commandFile = require(`../available.js`);
                commandFile.run(client);

};
