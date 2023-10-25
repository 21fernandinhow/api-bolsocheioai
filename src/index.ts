import express from "express";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.port || 8000;

app.get("/", (req, res) => {
  res.send("hello world o/");
});

app.listen(port, () => {
  console.log("Servidor iniciado...");
});
