import { webhookCallback } from "https://deno.land/x/grammy@v1.20.2/mod.ts";
import bot from "./mod.ts";

const handleUpdate = webhookCallback(bot, "std/http");

Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (req.method == "POST") {
    if (url.pathname == "/bot") {
      try {
        return await handleUpdate(req);
      } catch (err) {
        console.error(err);
        return new Response("Nope, not working...");
      }
    }
    return new Response("What you're trying to post?");
  }
  if (url.pathname == "/webhook") {
    try {
      await bot.api.setWebhook(`https://${url.hostname}/bot`);
      return new Response("Done. Set");
    } catch (_) {
      return new Response("Couldn't succeed with installing webhook");
    }
  }
  return Response.redirect("https://t.me/npradiobot", 302);
});