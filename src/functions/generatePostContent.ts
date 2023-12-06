import https from 'https';
import { config } from "dotenv";

config();

const GPTApiKey = process.env.GPT_KEY;

export const generatePostContent = async (theme: string) => {

    return new Promise<string>( (resolve, reject) => {
        try {
          const requestBody = {
            model: "gpt-3.5-turbo-0301",
            messages: [{ role: 'user', content: `Você é um especialista em finanças que escreve para um blog semanal chamado Bolso Cheio AI. 
            Respire fundo, e escreva um artigo aprofundado sobre ${theme}. Não é necessário repetir o título no inicio.` }],
            max_tokens: 2000,
            temperature: 0.6,
          };
    
          const requestData = JSON.stringify(requestBody);
    
          const options = {
            method: 'POST',
            hostname: 'api.openai.com',
            path: '/v1/chat/completions',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${GPTApiKey}`,
              'Content-Length': Buffer.byteLength(requestData),
            }
          };
    
          const req = https.request(options, (res) => {
            let data = '';
    
            res.on('data', (chunk) => {
              data += chunk;
            });
    
            res.on('end', () => {
              const responseData = JSON.parse(data);
              const gptText = responseData.choices[0].message.content;
              resolve(gptText);
            });
          });
    
          req.on('error', (error) => {
            reject(error); 
          });
    
          req.write(requestData);
          req.end();
        } catch (error) {
            console.log(`Erro: Não foi possível gerar o post: ${error}`)
        }
    });

};