const Discord = require('discord.js');
const client = new Discord.Client();
const bot_token = require('./token')

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    
    client.user.setActivity("in VSCode", { type: "PLAYING" });
})

client.login(bot_token);