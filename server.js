import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/tiempo/:ciudad", async (req, res) => {
  const ciudad = req.params.ciudad;
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${ciudad}&lang=es`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
