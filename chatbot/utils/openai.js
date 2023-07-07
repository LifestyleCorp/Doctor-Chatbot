const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env['OPENAI_API_KEY'],
});

const openai = new OpenAIApi(configuration);

async function getReponse(userprompt) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: userprompt,
    max_tokens: 300,
    temperature: 0.8,
  });
  return completion.data.choices[0].text;
}

module.exports = {
  respond: getReponse
}; 
