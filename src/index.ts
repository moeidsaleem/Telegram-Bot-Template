import bot from './bot';

bot.launch().then(() => {
  console.log('Bot started');
}).catch((err) => {
  console.error('Error launching bot', err);
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));