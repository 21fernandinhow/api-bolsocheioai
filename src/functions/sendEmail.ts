import nodemailer from 'nodemailer';
import { config } from "dotenv";

config();

export interface mailOptions {
    from: string,
    to: string,
    subject: string,
    html: string
}

export default function sendEmail(mailOptions: mailOptions){

    const emailUser = "newsletter@bolsocheio.ai"
    const emailPassword = process.env.EMAIL_PASSWORD

    const transport = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
            user: emailUser,
            pass: emailPassword
        }
    });

    transport.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
    });
}
