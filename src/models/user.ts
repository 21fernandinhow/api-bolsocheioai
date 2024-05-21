import mongoose, { Schema, Document } from 'mongoose';

export interface interfaceUser extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema<interfaceUser>({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const UserModel = mongoose.model<interfaceUser>('User', userSchema);