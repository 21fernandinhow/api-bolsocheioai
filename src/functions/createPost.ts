import { getPostTitle } from "./getPostsTitles";
import { generatePostContent } from "./generatePostContent";
import { savePost } from "./savePost";

export async function CreatePost () {
  const postTitle = await getPostTitle();
  const postContent = await generatePostContent(`${postTitle}`);
  savePost(`${postTitle}`, `${postContent}`);
}

