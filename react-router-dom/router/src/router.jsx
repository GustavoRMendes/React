import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Item from "./components/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
  {
    path: "/item",
    element: <Item/>
  }
])

export default router