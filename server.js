const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🦁 León IA está activo");
});

app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.json({ reply: "No entendí tu mensaje" });
  }

  res.json({
    reply: "León IA escuchó: " + userMessage
  });
});

app.listen(PORT, () => {
  console.log(`León IA corriendo en puerto ${PORT}`);
});
