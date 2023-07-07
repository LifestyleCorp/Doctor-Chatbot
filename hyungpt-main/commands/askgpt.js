const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const api_key = process.env['OPENAI_API_KEY']
const client_id = process.env['CLIENT_ID']

const wait = require('node:timers/promises').setTimeout;

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: api_key,
});

const openai = new OpenAIApi(configuration);

async function respond(userprompt) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: userprompt}],
    max_tokens: 300,
    temperature: 0.8,
  });
  return completion.data.choices[0].message.content;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('askgpt')
    .setDescription('Ask ChatGPT a question.')
    .addStringOption(option =>
  		option.setName('prompt')
  			.setDescription('What are you putting into ChatGPT?')
        .setRequired(true)),
  async execute(interaction) {
    const prompt = interaction.options.getString('prompt');
    
    await interaction.deferReply();
    
    const responseEmbed = new EmbedBuilder()
        .setColor('303434')
        .setTitle(`chatgpt!`)
        .setURL('https://chat.openai.com/')
        .setDescription(`${await respond(prompt)}`)
        .setFooter({ text: `openai's gpt-3.5-turbo` })
        .setTimestamp()
    await interaction.editReply({ embeds: [responseEmbed] });
  }
}
