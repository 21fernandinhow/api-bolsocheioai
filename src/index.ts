import express from "express";
import { config } from "dotenv";
import mongoConnect from "./config/database";
import postsRouter from "./routes/postsRouter";
import leadsRouter from "./routes/leadsRouter";
import usersRouter from "./routes/usersRouter";
import cron from "node-cron"
import basicAuth from "./functions/basicAuth";
import corsConfig from "./functions/corsConfig";
import CreatePost from "./functions/createPost";
import sendNewsletter from "./functions/sendNewsletter";
import sendNPS from "./functions/sendNPS";

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
app.use('/users', usersRouter);

//CronJobs
cron.schedule('30 10 * * 2', async () => {

  console.log('Executando a função de criar post...');
  const post = await CreatePost();

  if(post){
    sendNewsletter(post);
  } else {
    console.log("Erro ao criar post")
  }

}, {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

cron.schedule('30 10 17 * *', async () => {
  console.log('Executando a função de pesquisar feedbacks...');
  sendNPS()
}, {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

//Server
app.listen(port, () => {
  console.log("Servidor em funcionamento...");
});
