import express from "express";
import { config } from "dotenv";
import mongoConnect from "./config/database";
import postsRouter from "./routes/postsRouter";
import leadsRouter from "./routes/leadsRouter";
import basicAuth from "./functions/basicAuth";
import corsConfig from "./functions/corsConfig";

//Env config
config();

//Setup
const app = express();
const port = process.env.PORT || 3000;
mongoConnect();

//Middleares
app.use(express.json());
app.use(corsConfig);
app.use(basicAuth);
app.use('/posts', postsRouter);
app.use('/leads', leadsRouter);

//Server
app.listen(port, () => {
  console.log("Servidor em funcionamento...");
});

