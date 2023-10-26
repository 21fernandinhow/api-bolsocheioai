import mongoose, { Schema, Document } from 'mongoose';

export interface interfaceLead extends Document {
  name: string;
  email: string;
}

const leadSchema = new Schema<interfaceLead>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

export const LeadModel = mongoose.model<interfaceLead>('Lead', leadSchema);
