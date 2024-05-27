import express, { Request, Response } from "express";
import {PostModel, interfacePost} from "../models/post";
import { savePost } from "../functions/savePost";
import { getPostInfo } from "../functions/getPostInfo";
//import { CreatePost } from "../functions/createPost";

const postsRouter = express.Router();

postsRouter.get('/', async (req: Request, res: Response)=>{
    try {
        const posts: interfacePost[] = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar posts' });
    }
});

postsRouter.get('/next', async (req: Request, res: Response) => {
    try {
        const nextPosts = []
        for(let i = 0; i < 5; i++){
            const newPost = await getPostInfo(i);
            nextPosts.push(newPost)
        }
        res.status(200).json(nextPosts);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar posts' });
    }
})

//To test createPost
/*
postsRouter.get('/create', async (req: Request, res: Response)=>{
    try {
        const postByAI = await CreatePost();
        res.status(201).json(postByAI);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar post' });
    }
});
*/

postsRouter.get('/:id', async (req: Request, res: Response)=>{
    try {
        const post = await PostModel.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ error: 'Post não encontrado' });
    }
});

postsRouter.post('/', async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        const savedPost = savePost(title, content);
        res.status(201).json(savedPost);
    } catch (error) {
        console.error('Erro ao criar um novo post:', error);
        res.status(500).json({ error: 'Erro ao criar um novo post' });
    }
});

postsRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const {title, content} = req.body;
        const post = await PostModel.findById(req.params.id);

        if(post){
            await post.updateOne({title});
            await post.updateOne({content});
            res.status(200).json("Post atualizado com sucesso! \n\n"+post)
        } else {
            res.status(500).json({ error: 'Erro ao atualizar post' });
        }
        
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar post' });
    }
});

postsRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        await PostModel.findByIdAndRemove(req.params.id);
        res.status(200).json({content: "Post deletado com sucesso!"})
    } catch (error) {
        res.status(500).json({ error: 'Erro ao apagar post' });
    }
});

export default postsRouter;