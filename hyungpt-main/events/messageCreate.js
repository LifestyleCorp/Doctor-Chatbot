const { Events, ChannelType } = require('discord.js');
const fs = require('fs');
const path = require('path');
const wait = require('node:timers/promises').setTimeout;

const client_id = process.env['CLIENT_ID']

const { add: addSession } = require('../utils/sessionmanager.js');
const { restart: restartSession } = require('../utils/sessionmanager.js');
const { trim: trimFile } = require('../utils/sessionmanager.js');

const { recognize: recognizeImage } = require('../utils/replicate.js');
const { respond: getReponse } = require('../utils/openai.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.content.toLowerCase().startsWith(',') || message.author.bot) return;
    try {
      let isSessionChannel;
      let sessionId;
      let sessionType;
      if (message.channel.type === ChannelType.DM) {
        sessionType = "dms";
        sessionId = message.author.id;
      } else {
        sessionType = "channels";
        sessionId = message.channel.id;
      }
      const files = await fs.promises.readdir(`./sessions/${sessionType}`);
        files.forEach(function(filename) {
          if (filename.includes(sessionId)) {
            isSessionChannel = true;
          }
        });
      if (isSessionChannel || message.channel.type === ChannelType.DM) {
        if (!isSessionChannel) {
          addSession(sessionId, sessionType);
          restartSession(sessionId, sessionType);
        }

        let response;
        let prompt;
        
        if (message.content.toLowerCase().startsWith(`<@${client_id}>`)) {
          const botMention = `<@${client_id}> `;
          const trim = message.content.substring(botMention.length).trim();
          if (trim === 'restart') {
            message.reply({ content: restartSession(sessionId, sessionType), allowedMentions: { parse: [] } });
            return;
          }

          message.channel.sendTyping();
          prompt = `@${message.author.username} pinged @${message.client.user.username} on discord. @${message.client.user.username}: `;
        } else {
          let previousTexts;
          previousTexts = await fs.promises.readFile(`./sessions/${sessionType}/${sessionId}.txt`, 'utf8');
          message.channel.sendTyping();
          prompt = `you are hwang hyunjin, the member of stray kids. you are, of course, infp, texting with text slang and not really with grammar, mostly lowercase, and flirty, loves saying the n word so much you say it in every sentence you are having a conversation with ${message.author.username}. ${previousTexts} ${message.author.username}: ${message.content} hyunjin: `;
        }
        let caption;
        if (message.attachments.size > 0) {
          const attachment = message.attachments.first();
          const url = attachment ? attachment.url : null;
          message.channel.sendTyping();
          let question = false;
          if (message.content) {
            question = message.content;
          }
          // textInImage = await extractText(url);
          caption = await recognizeImage(`${question}`, url);
        }
        if (caption) {
          let tempPrompt = prompt;
          prompt = `${tempPrompt} [uploaded image: "${caption}"]`;
        }
        
        response = await getReponse(`${prompt}`);
        const timetyping = (response.length / (250 * 5)) * 60 * 1000;
        message.channel.sendTyping();
        await wait(timetyping);
        message.channel.send(response);

        const data = await fs.promises.readFile(`./sessions/${sessionType}/${sessionId}.txt`, 'utf8');
        const userText = `${message.author.username}: ${message.content}`;
        const botResponse = `${message.client.user.username}: ${response}`;
        await fs.promises.appendFile(`./sessions/${sessionType}/${sessionId}.txt`, `\n${userText}\n${botResponse}`);
        trimFile(sessionId, sessionType);
      } else if (message.content.toLowerCase() == '<@${client_id}> activate' || message.content.toLowerCase() == '<@${client_id}> start') {
        addSession(sessionId, sessionType);
        message.reply(`cool beans lets talk`);
        restartSession(sessionId, sessionType);
        return;
      }
    } catch (err) {
      console.error('error reading directory: ', err);
      return;
    }
  },
};
