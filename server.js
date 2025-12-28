const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("."));

// Ruta principal (opcional)
app.get("/", (req, res) => {
  res.send("León IA está despierto 🦁");
});

// RUTA DE LA IA
app.post("/api", (req, res) => {
  const mensaje = req.body.mensaje || "";

  let respuesta = "";

  if (mensaje.toLowerCase().includes("hola")) {
    respuesta = "Hola 👋 Soy León IA. Estoy aquí para ayudarte paso a paso.";
  } 
  else if (mensaje.toLowerCase().includes("quien eres")) {
    respuesta = "Soy León IA, un asistente que razona y explica de forma simple.";
  } 
  else if (mensaje.trim() === "") {
    respuesta = "Escribe algo para que pueda ayudarte.";
  } 
  else {
    respuesta =
      "Buena pregunta. Voy a pensarlo paso a paso:\n\n" +
      "1️⃣ Analizo lo que dices\n" +
      "2️⃣ Busco la mejor respuesta\n" +
      "3️⃣ Te explico con palabras simples\n\n" +
      "👉 Tu mensaje fue: " + mensaje;
  }

  res.json({ respuesta });
});

// PUERTO (Render lo necesita así)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor León IA activo en puerto", PORT);
});
