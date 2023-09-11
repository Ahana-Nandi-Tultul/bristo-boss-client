import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Secrets from "../shared/Secrets/Secrets";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../pages/MyCart/MyCart";
import AllUsers from "../pages/AllUsers/AllUsers";


  const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
              path: 'menu',
              element: <Menu></Menu>
            },
            {
              path: "/order/:category",
              element: <Order></Order>
            },
            {
              path: 'login',
              element: <Login></Login>
            },
            {
              path: 'signup',
              element: <Signup></Signup>
            },
            {
              path: "secrets",
              element: <PrivateRoutes><Secrets></Secrets></PrivateRoutes>
            }
        ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element: <MyCart></MyCart>
        },
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ])

  export default router;