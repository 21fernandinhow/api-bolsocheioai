import { Request, Response, NextFunction } from "express";
import { config } from "dotenv";

config()

const apiKey = process.env.API_KEY;

export default function basicAuth(req: Request, res: Response, next: NextFunction): void{
    const providedApiKey = req.headers['x-api-key'];

    if (providedApiKey === apiKey) {
        next();
    } else {
        res.status(401).send('Acesso não autorizado.');
    }
}