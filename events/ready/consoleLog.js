const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = (client) => {

	console.log(`✅ ${client.user.tag} is online.`);

	client.user.setActivity({
		
		name: "V 1.1.2",

		type: Discord.ActivityType.Streaming,

		url: "https://www.twitch.tv/xtencrud"
		
    })

};



