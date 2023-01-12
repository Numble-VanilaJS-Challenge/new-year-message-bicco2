import Main from "../pages/main";
import Post from "../pages/post";
import PostDetail from "../pages/postDetail";

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/post\/[\w]+$/, element: Post },
  { path: /^\/postDetail$/, element: PostDetail },
];
