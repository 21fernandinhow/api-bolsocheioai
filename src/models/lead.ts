import mongoose, { Schema, Document } from 'mongoose';

export interface interfaceLead extends Document {
  email: string;
}

const leadSchema = new Schema<interfaceLead>({
    email: {
        type: String,
        required: true
    }
})

export const LeadModel = mongoose.model<interfaceLead>('Lead', leadSchema);
