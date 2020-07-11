const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  //see if formatting is right
  if (message.mentions.users.first()) {
    //Feedback
    if ((await message.mentions.users.first().lastMessage) == null) {
      message.channel.send("Cannot find massage");
      return;
    }
    if (message.mentions.users.first() == message.author) {
      message.channel.send("You may not quote yourself");
      return;
    }

    message.mentions.users.first().lastMessage.react("🏆");
    message.react(client.emojis.get("585484061875896333") || "👍");
    //get content of last massage & time
    const quote =
      (await message.mentions.users.first().lastMessage.content) ||
      "content not found";
    const time = await message.mentions.users.first().lastMessage
      .createdTimestamp;
    //time into humanreadable time
    let date = new Date().toUTCString();

    //make an embed
    const msg = new Discord.RichEmbed()
      .setColor("#339966")
      .setTitle(quote || "No content found")
      .setDescription(`${message.mentions.users.first().tag} - ${date}`)
      .setFooter(`added by ${message.author.tag}`);
    //send to quotes
    client.channels.get("648233108877082634").send(msg);
  } else {
    message.channel.send("You need to mentions somebody");
  }
};
