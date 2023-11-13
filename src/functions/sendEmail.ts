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

    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD

    const transport = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 587, 
        secure: true, 
        auth: {
            user: emailUser,
            pass: emailPassword
        },
        logger: true,
        debug: true,
    });

    transport.sendMail(mailOptions, function(error, info){
        console.log(emailUser, emailPassword)
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
    });
}
