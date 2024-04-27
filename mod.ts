import { Bot, Context } from "https://deno.land/x/grammy@v1.20.2/mod.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts"

const bot = new Bot(Deno.env.get("TOKEN") || "");

bot.command("start", async (ctx: Context) => {
  await ctx.reply(
    `Привет! Это - бот лагеря "Новое поколение".\nОтправляй сюда свои фото акции "Моя история "Вожатского круга", а также ответы на сквозную игру и викторину, которые пройдут на Встрече.\n\nНе забудь подписывать свою делегацию и регион.\nУдачи! ❤️`,
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