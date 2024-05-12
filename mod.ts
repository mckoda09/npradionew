import { Bot, Context } from "https://deno.land/x/grammy@v1.20.2/mod.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts"

const bot = new Bot(Deno.env.get("TOKEN") || "");

bot.command("start", async (ctx: Context) => {
  await ctx.reply(
    `Привет!\nЯ - бот для связи с радио Нового Поколения!\n\nТы можешь отправить сообщение нашему радисту, и оно будет озвучено в рубрике "Приветы"!\n\nМожно также отправить музыку, которую ты хочешь услышать на радио.`,
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