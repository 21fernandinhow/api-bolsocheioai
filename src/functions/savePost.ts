import {PostModel} from "../models/post";

export const savePost = async (title:string, content:string) => {
    const newPost = new PostModel({
        title: title,
        date: new Date(),
        content: content,
    });
    const savedPost = await newPost.save();
    return savedPost;
}