import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Games from "./views/Games";
import Cart from "./views/Cart";
import AdminHome from "./views/admin/AdminHome";
import Layout from "./components/Layout";
import Game from "./views/Game";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "games/:gameId",
        element: <Game/>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
]);

export default router;
