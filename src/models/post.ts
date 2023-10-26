import mongoose, { Schema, Document } from 'mongoose';

export interface interfacePost extends Document {
  title: string;
  date: Date;
  content: string;
}

const postSchema = new Schema<interfacePost>({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

export const PostModel = mongoose.model<interfacePost>('Post', postSchema);
