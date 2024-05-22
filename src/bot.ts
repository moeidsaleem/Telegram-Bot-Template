import { Telegraf } from 'telegraf';
import { BOT_TOKEN } from './config';
import { addUser, getUser } from './models/user';

const bot = new Telegraf(BOT_TOKEN);

bot.start(async (ctx) => {
  const user = {
    id: ctx.from.id,
    username: ctx.from.username!,
    first_name: ctx.from.first_name,
    last_name: ctx.from.last_name,
  };

  await addUser(user);
  ctx.reply(`Welcome, ${ctx.from.first_name}!`);
});

bot.help((ctx) => ctx.reply('Send me a sticker'));

bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.hears('hi', (ctx) => ctx.reply('Hey there'));

export default bot;