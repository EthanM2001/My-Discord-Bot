const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const client = new Discord.Client();
const bot_token = require('./token')

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    
    client.user.setActivity("in VSCode", { type: "PLAYING" });

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel) => {
            console.log(`${channel.name}, ${channel.type}, ${channel.id}`);
        })
    })
})

client.on('message', (message) => {
    if (message.content === '!rip') {
        const attachment = new MessageAttachment("https://i.imgur.com/w3duR07.png")
        message.channel.send(`${message.author}`, attachment)
    }
})

client.login(bot_token);