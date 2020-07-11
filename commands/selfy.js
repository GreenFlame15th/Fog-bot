const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  let i = Math.floor(Math.random() * 25);

  let selfy = new Discord.RichEmbed();

  if (i < 8) {
    //8
    selfy = new Discord.RichEmbed()
      .setColor("#339966")
      .setTitle("I really like this one?")
      .setDescription("Maybe I will make a nude one next.")
      .setImage(
        "https://cdn.glitch.com/2fd2e9e8-8bda-40ad-85a4-757006e1d98e%2Ff4acb0429600818ab65a4be476b71650.jpg?v=1575023541128"
      );
  } else if (i < 15) {
    // 7 + 8 = 15
    selfy = new Discord.RichEmbed()
      .setColor("#339966")
      .setTitle("I like you.")
      .setDescription("owo")
      .setImage(
        "https://cdn.glitch.com/2fd2e9e8-8bda-40ad-85a4-757006e1d98e%2FB9QblYGfVYoewJFUzw4_qBHWc1SXcY8D_SDc5z4mM_U.jpg?v=1575023540992"
      );
  } else if (i < 21) {
    // 15 + 6 = 21
    selfy = new Discord.RichEmbed()
      .setColor("#339966")
      .setTitle("Guess who is gay?")
      .setDescription("Me")
      .setImage(
        "https://cdn.glitch.com/2fd2e9e8-8bda-40ad-85a4-757006e1d98e%2FoBCdUXpnpGJY4I0o1Z18WmxVbH32kNbKLeGso7c82qE.jpg?v=1575023540902"
      );
  } else {
    // 4 = 25 - 21
      selfy = "Umm, I don't know about that.";
      
  }
  
  
  message.channel.send(selfy);
};
