import {PostModel, interfacePost} from "../models/post";
import postsInfos from "../postTitles/postTitles.json"

export interface postInfo {
  title: string,
  keywords: string[]
}

export const getPostInfo = async (append: number = 0) => {

  try {
    const posts: interfacePost[] = await PostModel.find();
    const todayPostInfo = postsInfos[posts.length + append];
    return todayPostInfo
  } catch (error) {
    console.log(`Erro ao gerar título de Post: ${error}`)
  }

}