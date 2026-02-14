const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client({ intents: 32767 });
const eventHandler = require('./handlers/eventHandler.js');
const fs = require('fs');
const axios = require('axios');

const express = require('express');
const app = express();
const port = process.env.PORT | 4000;

app.get('/', (req, res) => {
    res.send('บอทออนไลน์เรียบร้อยแล้ว!');
});

app.listen(port, () => {
    console.log(`Server running at ${port}/`);
});

eventHandler(client);

const { SelectRow } = require('./Modal/selectmenu');
const { rowBtn } = require('./Modal/button');

client.on("interactionCreate", async (interaction, client) => {

    const i = interaction;

    if (i.isStringSelectMenu()) {
        if (i.customId === "ลาเมนู") {

            if (i.values[0] === "ลาทุกวัน") {

                const modal = new Discord.ModalBuilder()
                    .setCustomId('กรอกลาทุกวัน')
                    .setTitle('กรอกลาทุกวัน!');

                const firstname = new Discord.TextInputBuilder()
                    .setCustomId('firstname1')
                    .setLabel('Firstname | ชื่อจริง')
                    .setStyle(Discord.TextInputStyle.Short)
                    .setRequired(true);

                const lastname = new Discord.TextInputBuilder()
                    .setCustomId('lastname1')
                    .setLabel('Lastname | นามสกุล')
                    .setStyle(Discord.TextInputStyle.Short)
                    .setRequired(true);

                const reason = new Discord.TextInputBuilder()
                    .setCustomId('reason1')
                    .setLabel('Reapon | เหตุผล')
                    .setStyle(Discord.TextInputStyle.Short)
                    .setRequired(true);

                const datetime = new Discord.TextInputBuilder()
                    .setCustomId('datetime1')
                    .setLabel('Date And Time | วัน/เวลา')
                    .setStyle(Discord.TextInputStyle.Short)
                    .setRequired(true);

                const row = new Discord.ActionRowBuilder().addComponents(firstname);
                const row2 = new Discord.ActionRowBuilder().addComponents(lastname);
                const row3 = new Discord.ActionRowBuilder().addComponents(reason);
                const row4 = new Discord.ActionRowBuilder().addComponents(datetime);

                modal.addComponents(row, row2, row3, row4);
                i.showModal(modal);

            }
                
            if (i.values[0] === "ลาปกติ") {

                const modal = new Discord.ModalBuilder()
                    .setCustomId('กรอกลาปกติ')
                    .setTitle('กรอกลาปกติ!');

                const firstname = new Discord.TextInputBuilder()
                    .setCustomId('firstname')
                    .setLabel('Firstname | ชื่อจริง')
                    .setStyle(Discord.TextInputStyle.Short)
                    .setRequired(true);

                const lastname = new Discord.TextInputBuilder()
                    .setCustomId('lastname')
                    .setLabel('Lastname | นามสกุล')
                    .setStyle(Discord.TextInputStyle.Short)
                    .setRequired(true);

                const reason = new Discord.TextInputBuilder()
                    .setCustomId('reason')
                    .setLabel('Reapon | เหตุผล')
                    .setStyle(Discord.TextInputStyle.Short)
                    .setRequired(true);

                const datetime = new Discord.TextInputBuilder()
                    .setCustomId('datetime')
                    .setLabel('Date And Time | วัน/เวลา')
                    .setStyle(Discord.TextInputStyle.Short)
                    .setRequired(true);

                const row = new Discord.ActionRowBuilder().addComponents(firstname);
                const row2 = new Discord.ActionRowBuilder().addComponents(lastname);
                const row3 = new Discord.ActionRowBuilder().addComponents(reason);
                const row4 = new Discord.ActionRowBuilder().addComponents(datetime);

                modal.addComponents(row, row2, row3, row4);
                i.showModal(modal);

            } else if (i.values[0] === "cancel") {
                i.update({
                    components: [SelectRow, rowBtn]
                });
            }

        }
    }

    if (i.isModalSubmit()) {
        if (i.customId === "กรอกลาปกติ") {
            
            const firstname = i.fields.getTextInputValue('firstname');
            const lastname = i.fields.getTextInputValue('lastname');
            const reason = i.fields.getTextInputValue('reason');
            const datetime = i.fields.getTextInputValue('datetime');

            axios.post('https://sheetdb.io/api/v1/45dmatvx78alf', {
                data: {
                    name: firstname + " " + lastname,
                    discordid: i.user.id,
                    reason: reason,
                    datetime: datetime
                }
            })

            const success = new Discord.EmbedBuilder()
                .setTitle("<:success:1472125233837117524> ทำรายการสำเร็จเรียบร้อยแล้ว!")
                .setDescription("```diff\n+ สามารถเช็คข้อมูลการลาได้ที่หน้าเว็ปที่แปะไว้ได้เลยนะครับ!\n```")
                .setColor("#00ff00")
                .setTimestamp();

            i.reply({
                embeds: [success],
                ephemeral: true
            })

        } else if (i.customId === "กรอกลาทุกวัน") {
            
            const firstname = i.fields.getTextInputValue('firstname1');
            const lastname = i.fields.getTextInputValue('lastname1');
            const reason = i.fields.getTextInputValue('reason1');
            const datetime = i.fields.getTextInputValue('datetime1');

            axios.post('https://sheetdb.io/api/v1/wq8s9hv34qwjt', {
                data: {
                    name: firstname + " " + lastname,
                    discordid: i.user.id,
                    reason: reason,
                    datetime: datetime
                }
            })

            const success = new Discord.EmbedBuilder()
                .setTitle("<:success:1472125233837117524> ทำรายการสำเร็จเรียบร้อยแล้ว!")
                .setDescription("```diff\n+ สามารถเช็คข้อมูลการลาได้ที่หน้าเว็ปที่แปะไว้ได้เลยนะครับ!\n```")
                .setColor("#00ff00")
                .setTimestamp();

            i.reply({
                embeds: [success],
                ephemeral: true
            })

        }
    }

});

client.login(process.env.Token);



