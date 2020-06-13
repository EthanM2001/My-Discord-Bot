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
    if (message.content.startsWith("!")) {
        processCommand(message)
    }
})

function processCommand(message) {
    let fullCommand = message.content.substr(1);
    let splitCommand = fullCommand.split(" ");
    let primaryCommand = splitCommand[0];
    let arguments = splitCommand.slice(1);

    if (primaryCommand == "help") {
        helpCommand(arguments, message)
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, message)
    } else if (primaryCommand == "ping") {
        pingCommand(message)
    } else {
        message.channel.send("Unknown command. Try `!help` or `!multiply`")
    }
}


function pingCommand(message) {
    if (message) {
        message.channel.send('pong')
    }
}

function multiplyCommand(arguments, message) {
    if (arguments.length < 2) {
        message.channel.send("Not enough arguments. Try `!multiply 2 10`")
    } else {
        let product = 1;
        arguments.forEach((number) => {
            product = product * parseFloat(number)
        })
        message.channel.send("The product of " + arguments + " is " + product)
    }
}

function helpCommand(arguments, message) {
    if (arguments.length === 0) {
        message.channel.send("I'm unsure what you need help with. Try `!help [topic]`")
    } else {
        message.channel.send(`It looks like you need help with ${arguments}...`)
    }
}

client.login(bot_token);