const Telegraf = require('telegraf');
const bot = new Telegraf('828929063:AAG3PrnDkzXqQVqK6CCSp9jEUuFQ6e8pCXI');

bot.start(ctx => {
    ctx.reply('Welcome, I am bot) Send me anything');
});
bot.on('text', (ctx => {
    ctx.reply(ctx.message.text);
}));
bot.on('sticker', (ctx => {
    ctx.reply(ctx.message.sticker);
}));
bot.launch();