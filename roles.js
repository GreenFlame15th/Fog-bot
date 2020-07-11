const Discord = module.require("discord.js");

module.exports.run = async (client, oldMember, newMember) => {
  //is person meant to see NSFW
  let nsfw = false;
  const roles = newMember.roles.map(r => r.name);

  if (
    roles.includes("Ok, would rather not") ||
    roles.includes("Good Either Way") ||
    roles.includes("Want NSFW") ||
    roles.includes("Need NSFW")
  ) {
    nsfw = true;
  } else {
  }

  //gives nsfw roles base on sfw
  async function update(oldMember, newMember, nsfw, add, requier) {
    try {
      const up = newMember.guild.roles.find(r => r.name === add);
      const re = newMember.guild.roles.find(r => r.name === requier);
      const good = newMember.roles.map(r => r.id).includes(re.id);
      const need = !newMember.roles.map(r => r.id).includes(up.id);

      if (nsfw && good && need) {
        newMember.addRole(up);
      }
      if ((!nsfw || !good) && !need) {
        newMember.removeRole(up);
      }
    } catch (err) {
      console.error(err);
    }
  }

  //role list
  update(oldMember, newMember, nsfw, "Nude", "Real Human Person");
  update(oldMember, newMember, nsfw, "GreenMaidHaremNSFW", "GreenMaidHarem");
  update(oldMember, newMember, nsfw, "NSFW RPs", "RPs");

  //fusions roles
  async function fusion(oldMember, newMember, add, b, a) {
    try {
      const up = newMember.guild.roles.find(r => r.name === add);
      const reA = newMember.guild.roles.find(r => r.name === a);
      const reB = newMember.guild.roles.find(r => r.name === b);
      const goodA = newMember.roles.map(r => r.id).includes(reA.id);
      const goodB = newMember.roles.map(r => r.id).includes(reB.id);
      const has = newMember.roles.map(r => r.id).includes(up.id);

      if (goodA && goodB && !has) {
        newMember.addRole(up);
      }
      if ((!goodB || !goodA) && has) {
        newMember.removeRole(up);
      }
    } catch (err) {
      console.error(err);
    }
  }

  fusion(
    oldMember,
    newMember,
    "Girl dick observer IRL",
    "Girl dick observer",
    "Nude"
  );
  
    fusion(
    oldMember,
    newMember,
    "Date minor",
    "Below 18",
    "Date"
  );
  
  //a bit difrent to fusions for date 18+
      try {
      const up = newMember.guild.roles.find(r => r.name === "Date 18+");
      const reA = newMember.guild.roles.find(r => r.name === "Date");
      const reB = newMember.guild.roles.find(r => r.name === "Below 18");
      const goodA = newMember.roles.map(r => r.id).includes(reA.id);
      const goodB = !newMember.roles.map(r => r.id).includes(reB.id);
      const has = newMember.roles.map(r => r.id).includes(up.id);

      if (goodA && goodB && !has) {
        newMember.addRole(up);
      }
      if ((!goodB || !goodA) && has) {
        newMember.removeRole(up);
      }
    } catch (err) {
      console.error(err);
    }
  
};
