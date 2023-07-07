const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`${client.user.username} is ready <3`);
    client.user.setActivity('STRAY GPT!', { type: ActivityType.Listening });
	},
};
