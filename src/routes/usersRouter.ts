import express, { Request, Response } from "express";
import {UserModel, interfaceUser} from "../models/user";
import bcrypt from "bcrypt"

const usersRouter = express.Router();

usersRouter.get('/', async (req: Request, res: Response)=>{
    try {
        const users: interfaceUser[] = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar inscritos' });
    }
});

usersRouter.get('/:username', async (req: Request, res: Response)=>{
    try {
        const user = await UserModel.findOne({ username: req.params.username })
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: 'Inscrito não encontrado' });
    }
});

usersRouter.post('/register', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const encryptedPassword = await bcrypt.hash(password, 6)
        const newUser = new UserModel({
            username: username,
            password: encryptedPassword
        });
        const subscribedUser = await newUser.save();
        res.status(201).json(subscribedUser);
    } catch (error) {
        console.error('Erro ao cadastrar novo usuário:', error);
        res.status(500).json({ error: 'Erro ao cadastrar novo usuário' });
    }
});

usersRouter.post('/login', async ( req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username: username })

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
              res.status(200).json({ message: 'Login bem-sucedido', user: user });
            } else {
              res.status(401).json({ message: 'Senha incorreta' });
            }
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }

    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
});

usersRouter.delete('/:username', async (req: Request, res: Response) => {
    try {
        await UserModel.findOne({ username: req.params.username })
        res.status(200).json({content: "Usuário removido com sucesso!"})
    } catch (error) {
        res.status(500).json({ error: 'Erro remover usuário' });
    }
});

export default usersRouter;