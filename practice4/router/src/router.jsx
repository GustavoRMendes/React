import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Games from "./views/Games";
import Cart from "./views/Cart";
import AdminHome from "./views/admin/AdminHome";
import Layout from "./components/Layout";
import Game from "./views/Game";
import loadGame from "./loaders/loadGame";
import GameBoundary from "./erro-boundaries/GameBoundary";
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
        element: <Game/>,
        loader: loadGame,
        errorElement:<GameBoundary/>
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
