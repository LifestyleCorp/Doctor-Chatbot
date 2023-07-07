const { REST, Routes } = require('discord.js');
const fs = require('node:fs');

const token = process.env['TOKEN']
const clientId = process.env['CLIENT_ID']

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

	} catch (error) {
		console.error(error);
	}
})();
