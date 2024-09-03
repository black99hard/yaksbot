const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token
const token = '7359359493:AAFW9MRemzaE3sYg8Oj-Ab4K6ClubtX6V3c';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listener for the '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! I am your new bot.');
});

// Listener for any message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `You said: ${msg.text}`);
});
