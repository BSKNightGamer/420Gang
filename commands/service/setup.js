const Discord = require('discord.js');
const config = require('../../config.json');
const { SelectRow } = require('../../Modal/selectmenu');

module.exports = {
	name: 'setup',
	description: 'เมนูแจ้งลา 420 Shut Up Gang!',
	devOnly: true,
	// testOnly: Boolean,
	// deleted: Boolean,
	// options: [],

	callback: async (client, interaction) => {
		
		const i = interaction;
		
		const embed = new Discord.EmbedBuilder()
			.setTitle("แจ้งลา! | 420  Shut Up")
			.setDescription("```diff\n- กรุนาเลือกเมนูด่านล้างเพื่อใช้งานระบบ!\n```")
			.setImage('https://media.discordapp.net/attachments/1425085553795141784/1466741800998932655/dek_420_narak_2.png?ex=6990f700&is=698fa580&hm=d4a0c98907994d7bf82e8bbb2afa7ded9cf0790ac95eaa8a000849ae0035fe15&=&format=webp&quality=lossless&width=1872&height=457')
			.setThumbnail('https://media.discordapp.net/attachments/1472104110844285061/1472132616760070197/35353535353535.png?ex=699175d6&is=69902456&hm=dd56e290ee9fa398a9b66611a6bf5f35636898460d49bf7a6fa553d6ad3b7b13&=&format=webp&quality=lossless&width=350&height=350')
			.setColor("#999999")
			.setTimestamp();

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

		i.channel.send({
			embeds: [embed],
			components: [SelectRow, rowBtn]
		});

	},
};