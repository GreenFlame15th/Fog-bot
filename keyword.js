module.exports.run = async (client, message) => {
  const harem = Math.floor(Math.random() * 500);
  //key word re-act system
  //get a nick names

  const nick = message.member.displayName || message.author.username;

  //proposeal system
  if (harem == 1) {
    const certi = message.member.guild.roles.find(
      r => r.name === "Certified gay"
    );
    if (message.member.roles.has(certi.id || 0)) {
      const already = message.member.guild.roles.find(
        r => r.name === "GreenMaidHarem"
      );
      const ring = message.member.guild.roles.find(r => r.name === "Proposed");
      const maidLikie = message.member.guild.roles.find(
        r => r.name === "MaidLikie"
      );
      const breaking = message.member.guild.roles.find(
        r => r.name === "Heartbreaker ;-;"
      );

      if (
        !message.member.roles.has(already.id || 0) &&
        !message.member.roles.has(ring.id || 0) &&
        !message.member.roles.has(maidLikie.id || 0) &&
        !message.member.roles.has(breaking.id || 0)
      ) {
        //No maid role
        const no = message.member.guild.roles.find(r => r.name === "NoMaid");
        if (message.member.roles.has(no.id)) {
          message.member.addRole(maidLikie);
          return;
        }

        message.member.addRole(ring);

        const hi = Math.floor(Math.random() * 3);
        let content = `I'm merring you ${nick}! (Hey, <@261441087082594304> this isn't a message that should apper v1)`;

        switch (hi) {
          case 0:
            content = `Hi, **${nick}** I would like to marry you! :ring:`;
            break;
          case 1:
            content = `You know what **${nick}?** I like you. You may marry me. :ring:`;
            break;
          case 2:
            content = `owo, I will marry you! :ring:`;
            break;
          default:
            content = `I'm merring you ${nick}! (Hey, <@261441087082594304> this isn't a message that should apper v2)`;
        }
        message.channel
          .send(content, {
            files: [
              {
                attachment:
                  "https://cdn.glitch.com/2fd2e9e8-8bda-40ad-85a4-757006e1d98e%2F4de00fae467916c9aed4767924ea1020.0.png?v=1576435587963",
                name: "file.png"
              }
            ]
          })
          .catch(console.error);

        return;
      }
    }
  }

  //deffining reply with values for: (0)weight, (1)keyword(d=default and will always be added), (2)starts/contains, (3)added(0 default), (4)reply(string)
  const reply = [
    {
      weight: 2000,
      keyword: "d",
      type: "d",
      added: false,
      reply: "No reply",
      nsfw: false
    },
    {
      weight: 1,
      keyword: "d",
      type: "d",
      added: false,
      reply: `Cool, **${nick}**. Thanks for sharing.`,
      nsfw: false
    },
    {
      weight: 2,
      keyword: "d",
      type: "d",
      added: false,
      reply: `I got a feeling somebody here is thinking about girls holding hands, and that somebody is **${nick}**.`,
      nsfw: false
    },
    {
      weight: 5,
      keyword: "d",
      type: "d",
      added: false,
      reply: `Hey **${nick}** I appreciate you being with us.`,
      nsfw: false
    },
    {
      weight: 4,
      keyword: "d",
      type: "d",
      added: false,
      reply: `Hey, **${nick}** would you like to date me? Oh sorry, I cannot. \\\*Runs away but then immediately returns to keep working.\\\*`,
      nsfw: false
    },
    {
      weight: 5,
      keyword: "d",
      type: "d",
      added: false,
      reply: `**${nick}** you are valid.`,
      nsfw: false
    },
    {
      weight: 4,
      keyword: "d",
      type: "d",
      added: false,
      reply: `Looks like **${nick}** has the big gay.`,
      nsfw: false
    },
    {
      weight: 4,
      keyword: "d",
      type: "d",
      added: false,
      reply: `We know **${nick}** is gay, but will she be gay with me?`,
      nsfw: false
    },
    {
      weight: 3,
      keyword: "d",
      type: "d",
      added: false,
      reply: `Does anybody need some lady love? Because I'm almost done with my chores and down for whatever. **${nick}**, you look like you need a maiden in your panties.`,
      nsfw: true
    },
    {
      weight: 100,
      keyword: "wlw",
      type: "contains",
      added: false,
      reply: `Did somebody say wlw? I love woman who love woman? Because I'm a woman and I love girls who could be attracted to me.`,
      nsfw: false
    },

    {
      weight: 300,
      keyword: "i'm",
      type: "starts",
      added: false,
      reply: `Hi ${message.content.slice(4)}; I'm gay.`,
      nsfw: false
    },
    {
      weight: 100,
      keyword: "i'm gay",
      type: "starts",
      added: false,
      reply: `Cool, **${nick}**. Thanks for sharing.`,
      nsfw: false
    },
    {
      weight: 600,
      keyword: "i'm gay",
      type: "starts",
      added: false,
      reply: `Hi gay; I'm mom.`,
      nsfw: false
    },
    {
      weight: 300,
      keyword: "i’m",
      type: "starts",
      added: false,
      reply: `Hi ${message.content.slice(4)}; I'm gay.`,
      nsfw: false
    },
    {
      weight: 100,
      keyword: "i’m gay",
      type: "starts",
      added: false,
      reply: `Cool, **${nick}**. Thanks for sharing.`,
      nsfw: false
    },
    {
      weight: 600,
      keyword: "i’m gay",
      type: "starts",
      added: false,
      reply: `Hi gay; I'm mom.`,
      nsfw: false
    },
    {
      weight: 300,
      keyword: "im ",
      type: "starts",
      added: false,
      reply: `Hi ${message.content.slice(3)}; I'm gay.`,
      nsfw: false
    },
    {
      weight: 100,
      keyword: "im gay",
      type: "starts",
      added: false,
      reply: `Cool, **${nick}**. Thanks for sharing.`,
      nsfw: false
    },
    {
      weight: 600,
      keyword: "im gay",
      type: "starts",
      added: false,
      reply: `Hi gay; I'm mom.`,
      nsfw: false
    },
    {
      weight: 300,
      keyword: "yuri",
      type: "contains",
      added: false,
      reply: `Hey, **${nick}.** Do you know there is both **U** and **I** in yuri?`,
      nsfw: false
    },
    {
      weight: 200,
      keyword: "yuri",
      type: "contains",
      added: false,
      reply: `Did somebody said yuri? I love **${nick}!** ... wait ... I meat yuri.`,
      nsfw: false
    },
    {
      weight: 300,
      keyword: "owo",
      type: "contains",
      added: false,
      reply: `**${nick}** that's a nice OwO you got there, mine has piercings; OwÖ`,
      nsfw: false
    },
    {
      weight: 500,
      keyword: "owo",
      type: "contains",
      added: false,
      reply: `<:OwO:592072675388686347>`,
      nsfw: false
    },
    {
      weight: 600,
      keyword: "beautiful",
      type: "contains",
      added: false,
      reply: `OwO, so are you.`,
      nsfw: false
    },
    {
      weight: 300,
      keyword: "owo",
      type: "contains",
      added: false,
      reply: `owo, I like you.`,
      nsfw: false
    },
    {
      weight: 100,
      keyword: "uwu",
      type: "contains",
      added: false,
      reply: `This is not UwU time, drink some coffe and OwO☕!`,
      nsfw: false
    },
    {
      weight: 200,
      keyword: "uwu",
      type: "contains",
      added: false,
      reply: `UwU it is bed time now.`,
      nsfw: false
    },
    {
      weight: 70,
      keyword: "uwu",
      type: "contains",
      added: false,
      reply: `No UwU, **${Math.floor(Math.random() * 10000) + 1}**$ fine!`,
      nsfw: false
    },
    {
      weight: 30,
      keyword: "lesbian",
      type: "contains",
      added: false,
      reply: `**${nick}** you seem to really love girls. Like I get you are a lesbian and all, but wow, that a lot of love for girls you have there.`,
      nsfw: false
    },
    {
      weight: 80000,
      keyword: "good bot",
      type: "contains",
      added: false,
      reply: `Not bot, a maid!`,
      nsfw: false
    },
    {
      weight: 50000,
      keyword: "good bot",
      type: "contains",
      added: false,
      reply: `Maid, actually, but I glad you think I'm doing a good job.`,
      nsfw: false
    },
    {
      weight: 25000,
      keyword: "good bot",
      type: "contains",
      added: false,
      reply: `Beep Boop, may I touch your boob?`,
      nsfw: true
    },
    {
      weight: 100000,
      keyword: "good maid",
      type: "contains",
      added: false,
      reply: `Thanks, our teams try their best.`,
      nsfw: false
    },
    {
      weight: 70000,
      keyword: "good maid",
      type: "contains",
      added: false,
      reply: `I'm just glad to be working among such lovely ladies.`,
      nsfw: false
    },
    {
      weight: 30000,
      keyword: "good maid",
      type: "contains",
      added: false,
      reply: `You can reward me by posting a nude in <#648220412517285890>.`,
      nsfw: true
    },
    {
      wight: 40000,
      keywird: "good maid",
      type: "contains",
      added: false,
      reply: `I only did it because **Erza-sama** told me too.`,
      nsfw: false
    },
    {
      weight: 50000,
      keyword: "bad bot",
      type: "contains",
      added: false,
      reply: `I'm sorry for my mistake but please call me a maid.`,
      nsfw: false
    },
    {
      weight: 35000,
      keyword: "bad bot",
      type: "contains",
      added: false,
      reply: `I'm sorry. I'm a maid and we some time fuck up.`,
      nsfw: false
    },
    {
      weight: 35000,
      keyword: "bad bot",
      type: "contains",
      added: false,
      reply: `Fuck you! I'm a maid and I sometimes fuck up.`,
      nsfw: false
    },
    {
      weight: 20000,
      keyword: "bad bot",
      type: "contains",
      added: false,
      reply: `Fuck you, **${nick}** I'm a maid prone to human error.`,
      nsfw: false
    },
    {
      weight: 15000,
      keyword: "bad maid",
      type: "contains",
      added: false,
      reply: `I'm sorry, please punish me senpai.`,
      nsfw: true
    },
    {
      weight: 15000,
      keyword: "bad maid",
      type: "contains",
      added: false,
      reply: `I can offer consolation in my room upstairs.`,
      nsfw: true
    },
    {
      weight: 15000,
      keyword: "bad maid",
      type: "contains",
      added: false,
      reply: `You are free to punish me however you desier.`,
      nsfw: true
    },
    {
      weight: 15000,
      keyword: "bad maid",
      type: "contains",
      added: false,
      reply: `Oh, **${nick}** care to tell me just how bad I am?`,
      nsfw: true
    },
    {
      weight: 2000,
      keyword: "bad maid",
      type: "contains",
      added: false,
      reply: `Oh sorry, I will get in foreverbox now`,
      nsfw: false
    },
    {
      weight: 3000,
      keyword: "bad maid",
      type: "contains",
      added: false,
      reply: `I working hard to not make that mistake again! I'm not not very good at it.`,
      nsfw: false
    },
    {
      weight: 10000,
      keyword: "bad maid",
      type: "contains",
      added: false,
      reply: `I'm so sorry. Please don't be mad.`,
      nsfw: false
    },

    {
      weight: 2000,
      keyword: "oh beautiful maiden may i seek your wisdom",
      type: "contains",
      added: false,
      reply: `Be gay; do the crime.`,
      nsfw: false
    },
    {
      weight: 2000,
      keyword: "oh beautiful maiden may i seek your wisdom",
      type: "contains",
      added: false,
      reply: `You may.`,
      nsfw: false
    },
    {
      weight: 2000,
      keyword: "oh beautiful maiden may i seek your wisdom",
      type: "contains",
      added: false,
      reply: `Have you tried calling **GreenFlame** a **GF** instead?.`,
      nsfw: false
    },
    {
      weight: 2000,
      keyword: "oh beautiful maiden may i seek your wisdom",
      type: "contains",
      added: false,
      reply: `The cutest part of the girl is her tail.`,
      nsfw: false
    },
    {
      weight: 2000,
      keyword: "oh beautiful maiden may i seek your wisdom",
      type: "contains",
      added: false,
      reply: `\`Certified Gay\` means someone made a profile. \`Real Human Person\` means they have photo verified. This is not a perfect security measure so be sure to be saved on the internet.`,
      nsfw: false
    },
    {
      weight: 2000,
      keyword: "oh beautiful maiden may i seek your wisdom",
      type: "contains",
      added: false,
      reply: `If you are openly gay, it shows little girls they can be as well.`,
      nsfw: false
    },
    {
      weight: 2000,
      keyword: "oh beautiful maiden may i seek your wisdom",
      type: "contains",
      added: false,
      reply: `No, but you may spank me.`,
      nsfw: true
    },
    {
      weight: 2000,
      keyword: "oh beautiful maiden may i seek your wisdom",
      type: "contains",
      added: false,
      reply: `Guess who is gay? Fucking **@evaryone**.`,
      nsfw: true
    },
    {
      weight: 2000,
      keyword: "oh beautiful maiden may i seek your wisdom",
      type: "contains",
      added: false,
      reply: `I tend to respond when something really gay is said.`,
      nsfw: false
    },
    {
      weight: 2000,
      keyword: "oh beautiful maiden may i seek your wisdom",
      type: "contains",
      added: false,
      reply: `I do like telling people that I'm gay, and between the two fo us, I really am.`,
      nsfw: false
    },
    {
      weight: 2000,
      keyword: "oh beautiful maiden may i seek your wisdom",
      type: "contains",
      added: false,
      reply: `Sucma is really hot.`,
      nsfw: true
    },
    {
      weight: 3000,
      keyword: "<@!261441087082594304>",
      type: "contains",
      added: false,
      reply: `Whom is summoning the allmight one?`,
      nsfw: false
    },
    {
      weight: 1000,
      keyword: "<@!261441087082594304>",
      type: "contains",
      added: false,
      reply: `Oh hi **${nick}**, you are looking for my mom? I will go fetch her for you.`,
      nsfw: false
    },
    {
      weight: 2000,
      keyword: "sucma",
      type: "contains",
      added: false,
      reply: `Sucma tatas.`,
      nsfw: true
    }
  ];

  //getting varables
  const mtext = message.content.toLowerCase();
  let n = 0;
  let i;
  // add :geenFlame
  if (mtext.includes("green") || mtext.includes("trans woman are woman")) {
    message.react(
      client.emojis.get("650794712269193264" || "583329660289417233")
    ) || message.react("💚");
  }

  const nsfw = message.channel.nsfw;

  //adding replys that meet requiermants
  for (const key of reply) {
    if (!key.nsfw || nsfw) {
      if (
        key.keyword == "d" ||
        (key.type == "starts" && mtext.startsWith(key.keyword)) ||
        (key.type == "contains" && mtext.includes(key.keyword))
      ) {
        key.added = true;
        n += key.weight;
      }
    }
  }

  //draw
  let rn = Math.floor(Math.random() * n);

  //getting message from pool
  for (const key of reply) {
    if (key.added) {
      rn -= key.weight;
      if (rn < 0) {
        if (key.reply !== "No reply") {
          message.channel.send(key.reply);
        }
        return;
      }
    }
  }
};
