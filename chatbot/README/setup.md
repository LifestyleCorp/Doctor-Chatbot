## Installation & Setup
* [Node.js v16.9+](https://nodejs.org/en/download) must be installed.
* Download & extract the files either by git clone `https://github.com/skzhengkai/hyungpt.git` or by simply [downloading as a zip](https://github.com/skzhengkai/hyungpt/archive/refs/heads/main.zip)
* Open your command prompt and be sure you are on the right root directory by using `cd` command.
* Once you're on the root directory, proceed by running either the `npm install` or `yarn install` commands to install the required packages.
### Obtaining your OpenAI API Key
* Go to [openai.com](https://platform.openai.com/account/api-keys) to get your API key.
* Once you have your API Key, open `.env` and replace `YOUR_API_KEY_HERE` with your API key.
* It's worth noting that your API key lasts three months with `$18.00` of credit.
### Obtaining your ClarifAI API Key
* Head over to https://replicate.com/docs/reference/http and scroll down to the **Authentication** header. Copy your API key/token.
* Once you have your Replicate API Key, head over to `.env` and change `YOUR_REPLICATE_TOKEN` to your API key. 
### Register a Discord bot application
1. Go to Discord's [Developer Portal](https://discord.com/developers/applications).
2. Create a new application.
> Take note of the `APPLICATION ID` on the General Information tab page. Copy it and in `.env`, replace `YOUR_CLIENT_ID` with the Application ID.
3. Go to the Bot tab and add a bot user to your application.
> Take note of the `TOKEN` on the Bot tab page. Copy it and in `.env`, replace `YOUR_BOT_TOKEN` with the token you copied.
4. While in the Bot tab, scroll down to the Privileged Gateway Intents section and enable the toggles for both `Message Content` Intent and `Server Members` Intent.
5. Lastly, go to `OAUTH` tab and generate an **invite URL** with the Bot and Application Commands scopes enabled, and invite the bot into your server.

Once you're done with the following steps, run `node deploy-commands.js` to deploy slash commands and once that's finished, run `node index.js` and enjoy talking to your bot!

## Additional Configuration
### Changing the character
* Don't like [Hwang Hyunjin](https://stray-kids.fandom.com/wiki/Hyunjin)'s persona? That's totally fine (no it's not but whatever).
1. Head over to `events/messageCreate.js` and change line 18 to be whoever and whatever you want! The sky is the limit :)
### Using GPT4 in /askgpt
* Currently the /askgpt command is running on gpt-3.5-turbo. If you have early access to GPT4, then feel free to change `gpt-3.5-turbo` on line 18 to `gpt-4`.
