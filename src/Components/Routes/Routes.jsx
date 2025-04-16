import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import LogIn from "../LogIn/LogIn";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import ManageSer from "../Dashboard/AdminDashboard/ManageSer";
import Allorders from "../Dashboard/AdminDashboard/Allorders";
import Orders from "../Dashboard/UserDashboard/Orders";
import Review from "../Dashboard/UserDashboard/Review";
import Profile from "../Dashboard/UserDashboard/Profile";
import Allusers from "../Dashboard/AdminDashboard/Allusers";
import AllReviews from "../Dashboard/AdminDashboard/AllReviewes";
import AdminRoutes from "./AdminRoutes";
// import Bookings from "../Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },

    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:"manageservice",
        element:<AdminRoutes><ManageSer></ManageSer></AdminRoutes>
      },
      {
        path:"allorders",
        element:<AdminRoutes><Allorders></Allorders></AdminRoutes>
      },
      {
        path:"allusers",
        element:<AdminRoutes><Allusers></Allusers></AdminRoutes>
      },
      {
        path:"allreviews",
        element:<AdminRoutes><AllReviews></AllReviews></AdminRoutes>
      },
      {
        path:"cart",
        element:<Orders></Orders>
      },
      {
        path:"review",
        element:<Review></Review>
      },
      {
        path:"userHome",
        element:<Profile></Profile>
      }
    ]
  },
]);

export default router;
