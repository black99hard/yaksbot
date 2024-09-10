// import TelegramBot from 'node-telegram-bot-api';

const TelegramBot = require('node-telegram-bot-api')

// Replace with your bot token
const token = '7359359493:AAFW9MRemzaE3sYg8Oj-Ab4K6ClubtX6V3c';

// URL of your web app
const webAppUrl = 'https://yaksbot.vercel.app/'; // Replace with your actual web app URL

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listener for the '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Send a message with a button to open the web app
  bot.sendMessage(chatId, 'Welcome! I am your new bot. Click the button below to access the app.', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open App',
            web_app: { url: webAppUrl }
          }
        ]
      ]
    }
  });
});

// // Listener for any message
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, `You said: ${msg.text}`);
// });
