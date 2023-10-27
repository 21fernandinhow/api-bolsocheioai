import express, { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import mongoConnect from "./config/database";
import postsRouter from "./routes/postsRouter";
import leadsRouter from "./routes/leadsRouter";

//Env config
config();

//Setup
const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;
mongoConnect();

//Simple Authentication for Security
function basicAuth(req: Request, res: Response, next: NextFunction){
    const providedApiKey = req.headers['x-api-key'];

    if (providedApiKey === apiKey) {
        next();
    } else {
        res.status(401).send('Acesso não autorizado.');
    }
}

//CORS Config
function corsConfig(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
  
    if (req.method === 'OPTIONS') {
      res.status(204).send();
    } else {
      next(); 
    }
}

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

