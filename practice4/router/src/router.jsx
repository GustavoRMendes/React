import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Games from "./views/Games";
import Cart from "./views/Cart";
import AdminHome from "./views/admin/AdminHome";
import Layout from "./components/Layout";
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
