import {createBrowserRouter,} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from '../component/web/home/Home.jsx';
import Categories from '../component/web/categories/Categories.jsx';
import Dashboard from '../layout/Dashboard.jsx';
import HomeDashboard from '../component/dashboard/home/Home.jsx';
import CategoriesDashboard from '../component/dashboard/categories/Categories.jsx';
import Register from "../component/web/register/Register.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "categories",
        element: <Categories/>
      },
      {
        path: "*",
        element: <h2>Page not found</h2>
      },
      {
        path:"register",
        element: <Register/>
      }

    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children:[
      {
        path: "home",
        element: <HomeDashboard/>
      },
      {
        path: "categories",
        element: <CategoriesDashboard/>
      },
      {
        path: "*",
        element: <h2>Page not found</h2>
      }
    ]
  }
]);