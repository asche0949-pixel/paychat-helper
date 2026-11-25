export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;
    if (message && message.text === "/start") {
      const BOT_TOKEN = "9242652681:AAGr2_cKOhtgowN5ywg5oRUet6h8CTuaneE";
      const welcomeText = `💜 *PAYchat Interactive Assistant*\n\nGrow your channel, launch high-converting ads & maximize your P2P profits right inside Telegram! 🚀\n\n📢 *5-Post Ad Builder* — Auto-generate 5-step ad campaigns\n💱 *P2P Profit Calc* — Calculate ETB/USDT earnings + 2% affiliate\n📈 *Channel ROI* — Estimate monthly ad income (0% fee)\n\n👇 Tap the button below to launch the assistant!`;

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: message.chat.id,
          text: welcomeText,
          parse_mode: "Markdown",
          reply_markup: {
            inline_keyboard: [[
              {
                text: "🚀 Open PAYchat Assistant",
                web_app: { url: "https://asche0949-pixel.github.io/paychat-helper/" }
              }
            ]]
          }
        })
      });
    }
  }
  res.status(200).send("OK");
}
