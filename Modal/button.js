const Discord = require('discord.js');
const config = require('../config.json');

const url = new Discord.ButtonBuilder()
    .setURL("https://docs.google.com/spreadsheets/d/1Zh72uTnluCI-YRKOd4adygM5dg2MC5ivMkKpJLtKSrc/edit#gid=0")
    .setLabel("เช็คลาปกติ")	
    .setEmoji('<:281761:1472133628006891662>')
    .setStyle(Discord.ButtonStyle.Link);

const url2 = new Discord.ButtonBuilder()
    .setURL("https://docs.google.com/spreadsheets/d/11F1Dmro2MQrdHV0aYeZuL4zmfIPVbkuJthW9U8hsSFk/edit#gid=0")
    .setLabel("เช็คลาทุกวัน")
    .setEmoji('<:281761:1472133628006891662>')
    .setStyle(Discord.ButtonStyle.Link);
    
const url3 = new Discord.ButtonBuilder()
    .setURL("https://www.facebook.com/xtencrud.derek/")
    .setLabel("ระบบทั้งหมดทำโดย")	
    .setEmoji('<:fb:1424467238848696330>')
    .setStyle(Discord.ButtonStyle.Link);

const rowBtn = new Discord.ActionRowBuilder().addComponents(url, url2, url3);
        
module.exports = {
    rowBtn
}