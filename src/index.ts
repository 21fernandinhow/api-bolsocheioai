import express from "express";
import { config } from "dotenv";
import mongoConnect from "./config/database";
import postsRouter from "./routes/postsRouter";
import leadsRouter from "./routes/leadsRouter";
import cron from "node-cron"
import basicAuth from "./functions/basicAuth";
import corsConfig from "./functions/corsConfig";
import CreatePost from "./functions/createPost";
import sendNewsletter from "./functions/sendNewsletter";

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
app.use(express.urlencoded({ extended: true }));
app.use('/posts', postsRouter);
app.use('/leads', leadsRouter);

//CronJobs
cron.schedule('27 18 * * 1', async () => {
  console.log('Executando a função de criar post...');
  const post = await CreatePost();
  sendNewsletter(post);
}, {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

//Server
app.listen(port, () => {
  console.log("Servidor em funcionamento...");
});

