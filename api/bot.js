const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token
const token = '7359359493:AAFW9MRemzaE3sYg8Oj-Ab4K6ClubtX6V3c';

// Create a bot instance without polling (we'll handle updates via webhooks)
const bot = new TelegramBot(token);

// Webhook endpoint
export default async function handler(req, res) {
  // Handle Telegram updates sent to this endpoint
  if (req.method === 'POST') {
    const update = req.body;

    // Respond to the '/start' command
    if (update.message && update.message.text === '/start') {
      const chatId = update.message.chat.id;
      await bot.sendMessage(chatId, 'Welcome! I am your new bot on Vercel.');
    }

    // Echo any text message
    if (update.message && update.message.text) {
      const chatId = update.message.chat.id;
      await bot.sendMessage(chatId, `You said: ${update.message.text}`);
    }

    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}


