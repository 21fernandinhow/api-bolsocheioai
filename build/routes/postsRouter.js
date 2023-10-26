"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = require("../models/post");
const postsRouter = express_1.default.Router();
postsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_1.PostModel.find();
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar posts' });
    }
}));
postsRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_1.PostModel.findById(req.params.id);
        res.status(200).json(post);
    }
    catch (error) {
        res.status(404).json({ error: 'Post não encontrado' });
    }
}));
postsRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const newPost = new post_1.PostModel({
            title,
            date: new Date(),
            content,
        });
        const savedPost = yield newPost.save();
        res.status(201).json(savedPost);
    }
    catch (error) {
        console.error('Erro ao criar um novo post:', error);
        res.status(500).json({ error: 'Erro ao criar um novo post' });
    }
}));
postsRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield post_1.PostModel.findByIdAndRemove(req.params.id);
        res.status(200).json({ content: "Post deletado com sucesso!" });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao apagar post' });
    }
}));
exports.default = postsRouter;
