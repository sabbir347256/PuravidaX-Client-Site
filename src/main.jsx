import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/pages/Root/Root";
import Home from "./components/pages/HomePages/Home";
import Signup from "./components/pages/authenticationPages/Signup";
import Login from "./components/pages/authenticationPages/Login";
import SearchSeciton from "./components/pages/Flights/SearchSeciton";
import FlightDetails from "./components/pages/Flights/FlightDetails";
import PassengerDetails from "./components/pages/Flights/PassengerPart/PassengerDetails";
import BaggageDetails from "./components/pages/Flights/BaggagePart/BaggageDetails";
import SeatDetails from "./components/pages/Flights/Seats/SeatDetails";
import PaymentSection from "./components/pages/Flights/Payment/PaymentSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/flights",
        element: <SearchSeciton></SearchSeciton>,
      },
      {
        path: "/flight-details",
        element: <FlightDetails></FlightDetails>,
      },
      {
        path: "/passenger-details",
        element: <PassengerDetails></PassengerDetails>,
      },
      {
        path: "/extras",
        element: <BaggageDetails></BaggageDetails>,
      },
      {
        path : "/seat-plan",
        element : <SeatDetails></SeatDetails>
      },
      {
        path : '/procced-to-payment',
        element : <PaymentSection></PaymentSection>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </HelmetProvider>,
);
