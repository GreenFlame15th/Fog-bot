module.exports.run = async (client, message) => {
  //if noy a gate keeper, don't do anything
  if (!message.member.roles.map(r => r.id).includes("650747819618992150")) {
    return;
  }

  //get member
  const person = await message.mentions.members.first();

  //giving the roles
  if (message.content.includes("+18") || message.content.includes("18+")) {
    await person.addRoles([
      "647848699501871116", // verifcesion role
      "652910087999848458", // Vanity
      "653234232373674005", //harem
      "653234792904523786", //about
      "653235125168898048", //RP & TTRPG
      "653235258409353247", //Verficesion
      "653235378215714816", //other
      "656556236468256768"
    ]); //colour
  } else {
    await person.addRoles([
      "647848699501871116", // verifcesion role
      "652910087999848458", // Vanity
      "653234232373674005", //harem
      "653234792904523786", //about
      "653235125168898048", //RP & TTRPG
      "653235258409353247", //Verficesion
      "653235378215714816", //other
      "656556236468256768", //colour
      "650456413377789956"
    ]); //blow 18
  }

  const hi = Math.floor(Math.random() * 5);
  let content = `This is welcome massage for <${
    message.mentions.members.first().id
  }>, but something went wrong, I blame <@261441087082594304>.`; //defoult massage to let me know in case on an error

  switch (hi) {
    case 0:
      content = `Everyone give big owo for, <@${
        message.mentions.members.first().id
      }>!
and while they do this, you can head to <#646266527359959062> and pick some roles for yourself`;
      break;
    case 1:
      content = `Hello <@${
        message.mentions.members.first().id
      }> Welcome to the family. This is a lovly place, we got friendly girls, cute girls, and pretty girls.
...yeah that's a lot of girls but that's the point isn't it?
Oh! and we also got roles! You can get thouse at <#646266527359959062>`;
      break;
    case 2:
      content = `<@${
        message.mentions.members.first().id
      }> welcome to FoG, make yourself at home. You can start by getting some roles in <#646266527359959062> to introduce yourself and show additional content`;
      break;
    case 3:
      content = `So, <@${
        message.mentions.members.first().id
      }> hi. This is FoG, a place I call homo, I hope you will like it. There plenty of fun things you can do, but for starts why don't you head to <#646266527359959062> and pick up some roles?`;
      break;
    case 4:
      content = `OwO <@${
        message.mentions.members.first().id
      }> is now one of us. Isn't that great news everyone? Well, I sure am glad.

Also, I do hope she will like in here and make even get herself some roles from <#646266527359959062>.`;
      break;
    default:
      content = `This is welcome massage for <@${
        message.mentions.members.first().id
      }>, but something went wrong (v2), I blame <@261441087082594304>.`;
  }

  const channel = client.channels.get("582189274082836513"); //general
  channel.send(
    content ||
      `This is welcome massage for <${
        message.mentions.members.first().id
      }>, but something went wrong (v3), I blame <@261441087082594304>.`
  );

  message.channel.send(`Welcoming message send!`);
};
