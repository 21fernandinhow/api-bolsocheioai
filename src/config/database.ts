import mongoose from "mongoose";
import { config } from "dotenv";

config();
                                                                                                                                      
const mongoURI = process.env.MONGO_URI!;
mongoose.Promise = global.Promise;

export default async function mongoConnect(){
    mongoose.connect(mongoURI)
    .then(() => console.log('Conectado ao MongoDB =)'))
    .catch((err) => console.error(err));
}
