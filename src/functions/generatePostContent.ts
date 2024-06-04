import https from 'https';
import { postInfo } from './getPostInfo';
import { config } from "dotenv";

config();

const GPTApiKey = process.env.GPT_KEY;

export const generatePostContent = async (postInfo: postInfo) => {

    return new Promise<string>( (resolve, reject) => {
        try {
          const requestBody = {
            model: "gpt-4o",
            messages: [
              { 
                role: 'user', 
                content: `Você é um especialista em finanças que escreve para um blog semanal chamado Bolso Cheio AI. 
                Respire fundo, e escreva um artigo didático sobre "${postInfo.title}". Não é necessário inserir o título no inicio.
                Coloque negrito entre asteriscos e não use ###. 
                Faça o artigo otimizado para SEO, com as palavras-chave: 'bolso cheio', '${postInfo.keywords.join("', '")} .
                Lembre-se que o seu público são brasileiros.` 
              }
            ],
            max_tokens: 2000,
            temperature: 1,
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