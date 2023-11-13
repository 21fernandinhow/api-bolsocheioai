import sendEmail, {mailOptions} from "./sendEmail";
import { interfacePost } from "../models/post";
import { LeadModel, interfaceLead } from "../models/lead";

export default async function sendNewsletter(post: interfacePost){

    try {
        const leads: interfaceLead[] = await LeadModel.find();
        const leadsEmails = leads.map(i=>{
            return i.email
        })
        const htmlBody = `
        <h1> Esse conteúdo com certeza vai te interessar! </h1> 
        <h2 style="color: #1D7044; margin: 20px 0px;"> ${post.title} </h2> 
        <a href="https://bolsocheio.ai/posts/${post._id}" 
        style="background: #1D7044; color: #fff; font-weight: bolder; padding: 10px 20px; border-radius: 15px; 
        border: none; text-decoration: none; margin: 10px 0px;">
        Acesse agora!
        </a> <br><br>
        <hr>
        <h4>Obrigado por acompanhar nossa Newsletter! </h4>
        <img src="https://bolsocheio.ai/_next/image?url=%2Flogo.png&w=128&q=75" width="120" height="80" alt="bolsocheioai">
        <h4>Bolso Cheio A.I </h4>`
        leadsEmails.map(leadEmail => {
            const mailOptionsParameter: mailOptions = {
                from: "newsletter@bolsocheio.ai",
                to: leadEmail,
                subject: "Nossa IA produziu um conteúdo fresquinho para você!",
                html: htmlBody
            };
            sendEmail(mailOptionsParameter);
        })
    } catch (error) {
        console.error(error);
    }
}