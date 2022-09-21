const { Telegraf } = require('telegraf')

const TOKEN = '5429870939:AAFEdt1E4R1-pnFyaL3O55CbgdMSejc9cps'
const bot = new Telegraf(TOKEN)
const web_link = "https://beautiful-genie-dc6c96.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);


bot.launch()