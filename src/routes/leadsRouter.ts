import express, { Request, Response } from "express";
import {LeadModel, interfaceLead} from "../models/lead";

const leadsRouter = express.Router();

leadsRouter.get('/', async (req: Request, res: Response)=>{
    try {
        const leads: interfaceLead[] = await LeadModel.find();
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar inscritos' });
    }
});

leadsRouter.get('/:id', async (req: Request, res: Response)=>{
    try {
        const lead = await LeadModel.findById(req.params.id);
        res.status(200).json(lead);
    } catch (error) {
        res.status(404).json({ error: 'Inscrito não encontrado' });
    }
});

leadsRouter.post('/', async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const newLead = new LeadModel({
            name,
            email
        });
        const subscribedLead = await newLead.save();
        res.status(201).json(subscribedLead);
    } catch (error) {
        console.error('Erro ao cadastrar novo inscrito:', error);
        res.status(500).json({ error: 'Erro ao cadastrar novo inscrito' });
    }
});

leadsRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        await LeadModel.findByIdAndRemove(req.params.id);
        res.status(200).json({content: "Inscrito removido com sucesso!"})
    } catch (error) {
        res.status(500).json({ error: 'Erro remover inscrito' });
    }
});

export default leadsRouter;