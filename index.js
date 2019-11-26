// start with: node .

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv/config');
const http = require('http')
const port = process.env.PORT || 3000;
const token = process.env.TOKEN;

http.createServer().listen(port);

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

    if(message.channel.id==630827093911142411){ 
        console.log(message.content);
        let channel = client.channels.get("648905361343905802");
        channel.send(`**${message.author.tag}** ${message.content}(*${message.author.id}*)`);
        channel.send(`---------------------------------`)



    }
 
 })

btoa.on('error', err =>{
    console.log(err);
})

client.login(`token`);
