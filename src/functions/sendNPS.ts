import sendEmail, {mailOptions} from "./sendEmail";
import { LeadModel, interfaceLead } from "../models/lead";

export default async function sendNPS(){

    try {
        const leads: interfaceLead[] = await LeadModel.find();
        const leadsEmails = leads.map(i=>{
            return i.email
        })
        const htmlBody = `
        <h2> 
            Estamos fazendo uma pequena pesquisa para entender melhor o impacto de nossos conteúdos. Pode nos dar seu feedback? Prometo que será breve =) 
        </h2> 

        <a href="https://forms.gle/TqHV7zuZ8F9Jrif79" 
        style="background: #1D7044; color: #fff; font-weight: bolder; padding: 10px 20px; border-radius: 15px; 
        border: none; text-decoration: none; margin: 10px 0px;">
            Acessar formulário
        </a> <br><br>

        <hr>
        
        <h4>Obrigado por acompanhar nossa Newsletter! </h4>
        <img src="https://bolsocheio.ai/_next/image?url=%2Flogo.png&w=128&q=75" width="120" height="80" alt="bolsocheioai">
        <h4>Bolso Cheio A.I </h4>

        <a href="https://bolsocheio.ai/unsubscribe" style="font-size: 0.75rem; margin-top: 10px; color: #1D7044;">
            Caso deseje cancelar sua inscrição e não receber mais nossos emails, clique aqui.
        </a>
        `
        leadsEmails.map(leadEmail => {
            const mailOptionsParameter: mailOptions = {
                from: "newsletter@bolsocheio.ai",
                to: leadEmail,
                subject: "Queremos te ouvir!",
                html: htmlBody
            };
            sendEmail(mailOptionsParameter);
        })
    } catch (error) {
        console.error(error);
    }
}