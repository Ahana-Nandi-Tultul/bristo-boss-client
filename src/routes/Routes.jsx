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
import AdminRoutes from "./AdminRoutes";
import AddAItem from "../pages/Dashboard/AddAItem/AddAItem";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";


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
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <MyCart></MyCart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        // admin routes
        {
          path: 'adminhome',
          element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path: 'allUsers',
          element:  <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path: 'addAItem',
          element: <AdminRoutes><AddAItem></AddAItem></AdminRoutes>
        },
        {
          path: 'manageItems',
          element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        }
      ]
    }
  ])

  export default router;