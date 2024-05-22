import { Context } from 'telegraf';

export const loggingMiddleware = (ctx: Context, next: any) => {
  console.log(`Received update: ${ctx.updateType}`);
  return next();
};