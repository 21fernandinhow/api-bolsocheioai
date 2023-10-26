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
const lead_1 = require("../models/lead");
const leadsRouter = express_1.default.Router();
leadsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leads = yield lead_1.LeadModel.find();
        res.status(200).json(leads);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar inscritos' });
    }
}));
leadsRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lead = yield lead_1.LeadModel.findById(req.params.id);
        res.status(200).json(lead);
    }
    catch (error) {
        res.status(404).json({ error: 'Inscrito não encontrado' });
    }
}));
leadsRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const newLead = new lead_1.LeadModel({
            name,
            email
        });
        const subscribedLead = yield newLead.save();
        res.status(201).json(subscribedLead);
    }
    catch (error) {
        console.error('Erro ao cadastrar novo inscrito:', error);
        res.status(500).json({ error: 'Erro ao cadastrar novo inscrito' });
    }
}));
leadsRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lead_1.LeadModel.findByIdAndRemove(req.params.id);
        res.status(200).json({ content: "Inscrito removido com sucesso!" });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro remover inscrito' });
    }
}));
exports.default = leadsRouter;
