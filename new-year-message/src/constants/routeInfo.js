import Main from "../pages/main";
import Post from "../pages/post";
import Upload from "../pages/upload";

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/post\/[\w]+$/, element: Post },
  { path: /^\/upload$/, element: Upload },
];
