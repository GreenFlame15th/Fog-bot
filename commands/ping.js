const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  await message.channel.send(`${Date.now() - message.createdTimestamp}ms`);
};

