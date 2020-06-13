const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    
})

client.login('NzIxMzQzNDAyODI2MDA2NjQ5.XuTJbg.TvPSIU-B-mMif47XoOUqmONDpTs');