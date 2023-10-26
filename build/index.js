"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const database_1 = __importDefault(require("./config/database"));
const postsRouter_1 = __importDefault(require("./routes/postsRouter"));
const leadsRouter_1 = __importDefault(require("./routes/leadsRouter"));
//Env config
(0, dotenv_1.config)();
//Setup
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;
(0, database_1.default)();
//Simple Authentication for Security
function basicAuth(req, res, next) {
    const providedApiKey = req.headers['x-api-key'];
    if (providedApiKey === apiKey) {
        next();
    }
    else {
        res.status(401).send('Acesso não autorizado.');
    }
}
//Middleares
app.use(express_1.default.json());
app.use(basicAuth);
app.use('/posts', postsRouter_1.default);
app.use('/leads', leadsRouter_1.default);
//Server
app.listen(port, () => {
    console.log("Servidor em funcionamento...");
});
