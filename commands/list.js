const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  const flame = message.guild.roles
    .get("646290988779831316")
    .members.map(m => m.user.tag).length;
  const maid = message.guild.roles
    .get("650767324722495529")
    .members.map(m => m.user.tag).length;
  const erza = message.guild.roles
    .get("654407961841762306")
    .members.map(m => m.user.tag).length;

  let winning = "💚💚 Maid is winning! 💚💚";
  if (maid < flame) winning = "<:GreenFlame:650794712269193264><:GreenFlame:650794712269193264> Flame is winning! <:GreenFlame:650794712269193264><:GreenFlame:650794712269193264>";
  if (maid == flame) winning = "💚<:GreenFlame:650794712269193264> It's a green tie! 💚<:GreenFlame:650794712269193264>";
  if (erza > flame && erza > maid) winning = "💕💕 Erza is winning! 💕💕";
  if (flame == erza) winning = "💕<:GreenFlame:650794712269193264> My girls are in a tie. 💕<:GreenFlame:650794712269193264>";
  if (flame == erza && flame == maid) winning = "Three-way tie, we should have a threesome to celebrate";

  const list = new Discord.RichEmbed()
    .setColor("#339966")
    .setThumbnail(
      "https://i.pinimg.com/originals/cb/1a/0d/cb1a0d467344426d6b7588a3a1eb7f52.jpg"
    )
    .addField(
      "Verified People",
      `
🌸 Certified gay: ${
        message.guild.roles
          .get("647848699501871116")
          .members.map(m => m.user.tag).length
      }
<a:Megumin:651736322121269248> Real human person ${
        message.guild.roles
          .get("648219898266517539")
          .members.map(m => m.user.tag).length
      }`,
      false
    )
    .addField(
      "Harem wars",
      `<:GreenFlame:650794712269193264> Flame: ${flame}
💚 Maid: ${maid} (+ ${
        message.guild.roles
          .get("650772252799008779")
          .members.map(m => m.user.tag).length
      } proposed 💍)
💕 Erza: ${erza}
${winning}`,
      false
    )
    .addField(
      "Vanity roles",
      `
🤩 Nympth: ${
       message.guild.roles
         .get("649744272039477254")
         .members.map(m => m.user.tag).length
     }
🐉 Dragon layer: ${
        message.guild.roles
          .get("649744735094702102")
          .members.map(m => m.user.tag).length
      }
🥰 Fey misstres: ${
       message.guild.roles
         .get("649744995204595722")
         .members.map(m => m.user.tag).length
     }
☺️ Maid fluffing expert: ${
        message.guild.roles
          .get("649743856551591970")
          .members.map(m => m.user.tag).length
      }`,

      false
    )
    .setTimestamp()
    .setTitle('Flames of Green: Statistics')
      .addField(
      "RolePlay secion",
      `🎭 RPing: ${
        message.guild.roles
          .get("646389967735619605")
          .members.map(m => m.user.tag).length
      }
🔭 LFG: ${
        message.guild.roles
          .get("647878418347589643")
          .members.map(m => m.user.tag).length
      }`,
      false
      )
      .addField(
      "Age groups",
      `💋 18 or older: ${message.guild.roles
          .get("647848699501871116")
          .members.map(m => m.user.tag).length-message.guild.roles
          .get("650456413377789956")
          .members.map(m => m.user.tag).length}
🌞 Below 18: ${
        message.guild.roles
          .get("650456413377789956")
          .members.map(m => m.user.tag).length
      }`,
      false
    )
  
  if (message.member.hasPermission(["MANAGE_MESSAGES"]) && args[0]){
    const channel = client.channels.get(args[0]);
    channel.send(list)
     message.channel.send("List send!")
    
  }
else
  {
  message.channel.send(list);
    }
};
