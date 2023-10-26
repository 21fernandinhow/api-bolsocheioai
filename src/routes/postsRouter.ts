import express, { Request, Response } from "express";
import {PostModel, interfacePost} from "../models/post";

const postsRouter = express.Router();

postsRouter.get('/', async (req: Request, res: Response)=>{
    try {
        const posts: interfacePost[] = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar posts' });
    }
});

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
        const newPost = new PostModel({
            title,
            date: new Date(),
            content,
        });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        console.error('Erro ao criar um novo post:', error);
        res.status(500).json({ error: 'Erro ao criar um novo post' });
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