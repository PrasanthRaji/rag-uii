import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main";
import Loader from "./layout/loader";
import ChatPage from "./pages/chat";
import HomePage from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: Loader,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: Loader,
      },
      {
        path: "chat",
        element: <ChatPage />,
        loader: Loader,
      },
    ],
  },
]);


