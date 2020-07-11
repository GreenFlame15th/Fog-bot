const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

    //8
    message.channel.send(new Discord.RichEmbed()
      .setColor("#339966")
      .setTitle("Showing: @someome")
      .setDescription(`<@${message.guild.members.random().id}>`)
      );

 };