import mongoose, { Document } from 'mongoose';
export interface interfaceLead extends Document {
    name: string;
    email: string;
}
export declare const LeadModel: mongoose.Model<interfaceLead, {}, {}, {}, mongoose.Document<unknown, {}, interfaceLead> & interfaceLead & {
    _id: mongoose.Types.ObjectId;
}, any>;
