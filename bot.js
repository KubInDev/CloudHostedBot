const Discord = require('discord.js');
const Bot = new Discord.Client();

const token = 'Njg4Nzc3NjIxMjkwNDgzNzgw.Xm5QQA.MHi1a3pxqpVV6VlpfkDGNwlWooE';

Bot.on('ready', () =>{
    console.log('This bot is online!');
})

Bot.login(token);
