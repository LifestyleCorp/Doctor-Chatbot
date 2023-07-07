const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const client_id = process.env['CLIENT_ID']

const wait = require('node:timers/promises').setTimeout;

const Replicate = require("replicate");

const replicate = new Replicate({
  auth: process.env['REPLICATE_API_TOKEN'],
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName('imagine')
    .setDescription('image generation thats worse than midjourney')
    .addStringOption(option =>
  		option.setName('prompt')
  			.setDescription('write a description for your image')
        .setRequired(true)),
  async execute(interaction) {
    const prompt = interaction.options.getString('prompt');
    
    await interaction.deferReply();
    
    const output = await replicate.run(
      "ai-forever/kandinsky-2:601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f",
      {
        input: {
          prompt: prompt
        }
      }
    );
    
    const generationEmbed = new EmbedBuilder()
        .setColor('303434')
        .setDescription(`\`${prompt}\``)
        .setImage(output.toString())
        .setTimestamp()
    
    await interaction.editReply({ embeds: [generationEmbed] });
  }
}
