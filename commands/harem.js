const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  const list = new Discord.RichEmbed()
    .setColor("#339966")
    .setThumbnail(
      "https://i.pinimg.com/originals/cb/1a/0d/cb1a0d467344426d6b7588a3a1eb7f52.jpg"
    )
    .addField(
      "**<:GreenFlame:650794712269193264>Flame:**",
      `
<@!${message.guild.roles
        .get("646290988779831316")
        .members.map(m => m.user.id)
        .toString()
        .replace(
          /\,/g,
          `>
<@!`
        )}>
`,
      false
    )
    .addField(
      "**💚Maid:**",
      `
<@!${message.guild.roles
        .get("650767324722495529")
        .members.map(m => m.user.id)
        .toString()
        .replace(
          /\,/g,
          `>
<@!`
        )}>`,
      false
    )
    .addField(
      "**:ring:Proposed:**",
      `
<@!${message.guild.roles
        .get("650772252799008779")
        .members.map(m => m.user.id)
        .toString()
        .replace(
          /\,/g,
          `>
<@!`
        )}>`,
      false
    );
  if (message.member.hasPermission(["MANAGE_MESSAGES"]) && args[0]) {
    const channel = client.channels.get(args[0]);
    channel.send(list);
    message.channel.send("List send!");
  } else {
    message.channel.send(list);
  }
};
