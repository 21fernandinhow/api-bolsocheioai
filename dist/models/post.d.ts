import mongoose, { Document } from 'mongoose';
export interface interfacePost extends Document {
    title: string;
    date: Date;
    content: string;
}
export declare const PostModel: mongoose.Model<interfacePost, {}, {}, {}, mongoose.Document<unknown, {}, interfacePost> & interfacePost & {
    _id: mongoose.Types.ObjectId;
}, any>;
