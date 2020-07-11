const Discord = module.require("discord.js");
const prefix = process.env.PREFIX;

module.exports.run = async (client, message, args) => {
  const number = await message.guild.members
        .filter(
          m =>
            m.roles
              .map(r => r.name)
              .includes(message.content.slice(prefix.length + 7)) == true
        ).map(m => m).length
  
  await message.channel.send(
    `There are **${number
    }** people with **${message.content.slice(prefix.length + 7)}** role`
  );
};
