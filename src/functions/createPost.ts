import { getPostInfo, postInfo } from "./getPostInfo";
import { generatePostContent} from "./generatePostContent";
import { savePost } from "./savePost";

export default async function CreatePost () {
  const postInfo: postInfo | undefined = await getPostInfo();

  if(postInfo){
    const postContent = await generatePostContent(postInfo);
    const createdPost = savePost(`${postInfo}`, `${postContent}`);
    return createdPost;
  }

  return false
}

