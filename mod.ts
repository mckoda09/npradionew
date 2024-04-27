import { Bot, Context } from "https://deno.land/x/grammy@v1.20.2/mod.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts"

const bot = new Bot(Deno.env.get("TOKEN") || "");

bot.command("start", async (ctx: Context) => {
  await ctx.reply(
    'Привет! 👋\nЯ - бот лагеря Новое Поколение. Обычно я собираю приветы на радио.\nНапиши, что хочешь передать! Можно и музыку, и сообщение, и видео, и файлы!',
  );
});

bot.on("message", async (ctx: Context) => {
  if (ctx.chat?.id != -1001538721471) {
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