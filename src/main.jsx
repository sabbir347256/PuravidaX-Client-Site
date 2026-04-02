import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/pages/Root/Root";
import Home from "./components/pages/HomePages/Home";
import Signup from "./components/pages/authenticationPages/Signup";
import Login from "./components/pages/authenticationPages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      }
    ],
  },
  {
    path : '/signup',
    element : <Signup></Signup>
  },
  {
    path : "/login",
    element : <Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </HelmetProvider>,
);
