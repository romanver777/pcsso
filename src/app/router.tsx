import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { PostPage } from "@/pages/post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "posts/:postId",
        element: <PostPage />,
      },
    ],
  },
]);
