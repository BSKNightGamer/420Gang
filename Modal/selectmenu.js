const Discord = require('discord.js');
const config = require('../config.json');

const select = new Discord.StringSelectMenuBuilder()
    .setCustomId('ลาเมนู')
    .setPlaceholder('เลือกลาที่ต้องการจะลา!')
    .addOptions(
        
        new Discord.StringSelectMenuOptionBuilder()
            .setLabel(' | ลาทุกวัน')
            .setDescription('เลือกลาที่ต้องการจะลา')
            .setEmoji('<:3652191:1472132912504770601>')
            .setValue('ลาทุกวัน'),

        new Discord.StringSelectMenuOptionBuilder()
            .setLabel(' | ลาปกติ')
            .setDescription('เลือกลาที่ต้องการจะลา')
            .setEmoji('<:9129797:1472133057711706212>')
            .setValue('ลาปกติ'),

        new Discord.StringSelectMenuOptionBuilder()
            .setLabel(' | ยกเลิกเมนู')
            .setDescription('กดเพื่อยกเลิกเมนู!')
            .setEmoji('<:5268671:1472133126032592988>')
            .setValue('cancel')
    );

const SelectRow = new Discord.ActionRowBuilder().addComponents(select);

module.exports = {
    SelectRow
}