import { Bot, Context } from "https://deno.land/x/grammy@v1.20.2/mod.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts"

const bot = new Bot(Deno.env.get("TOKEN") || "");

bot.command("start", async (ctx: Context) => {
  await ctx.reply(
    'Привет 👋\nЯ - бот для приветов лагеря Новое Поколение.\n\nМы запускаем акцию "Новогодние каникулы с семьёй". Поделитесь своими самыми интересными историями празднования Нового года или Рождества\n\nУже завтра все истории прозвучат по радио Нового Поколения, а авторы лучших историй получат памятные призы от лагеря.\n\nВ любой момент вы можете отправить сюда приветы, поздравления и просто приятные слова, и мы обязательно озвучим их в рубрике "Приветы" на радио.',
  );
});

bot.on("message", async (ctx: Context) => {
  if (ctx.chat?.id == -1001538721471) {
    await ctx.forwardMessage("-1001538721471", ctx.message)
    await ctx.react("👍")
    await ctx.reply(
      "Отправлено ✅",
    );
  }
});

bot.catch(error => {
  console.error(error.message)
})

export default bot;