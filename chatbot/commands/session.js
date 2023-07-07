const { SlashCommandBuilder, ChannelType } = require('discord.js');
const { restart: restartSession } = require('../utils/sessionmanager.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('session')
    .setDescription('manage your session with hyungpt')
    .addSubcommand(subcommand =>
      subcommand
        .setName('restart')
        .setDescription('Restarts the current session for the bot.')),
  async execute(interaction) {
    if (interaction.options.getSubcommand() === "restart") {
      let sessionId;
      if (interaction.channel.type === ChannelType.DM) {
        sessionType = "dms";
        sessionId = interaction.user.id;
      } else {
        sessionType = "channels";
        sessionId = interaction.channel.id;
      }
      await interaction.reply({ content: restartSession(sessionId, sessionType) });
    }
  }
}
