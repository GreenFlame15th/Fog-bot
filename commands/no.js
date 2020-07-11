const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  const ring = message.member.guild.roles.find(r => r.name === "Proposed");
  const maidLikie = message.member.guild.roles.find(
    r => r.name === "MaidLikie"
  );
  const no = message.member.guild.roles.find(r => r.name === "NoMaid");

  if (!message.member.roles.has(no.id || 0)) {
    message.member.addRole(no);
    if (message.member.roles.has(ring.id || 0)) {
      message.member.addRole(maidLikie);
      message.member.removeRole(ring);
    }

    const harem = message.member.guild.roles.find(
      r => r.name === "GreenMaidHarem"
    );
    const breaking = message.member.guild.roles.find(
      r => r.name === "Heartbreaker ;-;"
    );

    if (message.member.roles.has(harem.id || 0)) {
      message.member.addRole(breaking);
      message.member.removeRole(harem);
      message.channel.send("Very well then 💔.");
      return;
    }

    message.channel.send("You shell be hiden");
  } else {
    message.member.removeRole(no);
    if (message.member.roles.has(maidLikie.id || 0)) {
      message.member.addRole(ring);
      message.member.removeRole(maidLikie);
      message.channel.send("You may marry me now.");
      return;
    }
    message.channel.send("Hello Again");
  }
  return;
};
