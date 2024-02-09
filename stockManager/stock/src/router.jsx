import { createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Layout from "./pages/Layout"
import StockItems from "./pages/StockItems"
import Item from "./pages/Item"
import NovoItem from "./pages/NovoItem"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index:true,
        element: <Dashboard/>
      },
      {
        path:'/items',
        element: <StockItems/>
      },{
        path: '/items/:itemId',
        element: <Item/>
      },{
        path: '/novoItem',
        element: <NovoItem/>
      }
    ]
  }
])

export default router