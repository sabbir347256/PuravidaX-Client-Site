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
import DemoPage from "./components/pages/DemoPage/DemoPage";
import CarSearchSection from "./components/pages/CardModel/SearchPart/CarSearchSection";
import CarDetails from "./components/pages/CardModel/CarDetails/CarDetails";
import DriverInfo from "./components/pages/CardModel/DriverInfo/DriverInfo";
import CarPayment from "./components/pages/CardModel/CarPayment/CarPayment";
import ExperienceSection from "./components/pages/ExperiencSection/ExperienceSection";
import ExperiencePaymentSection from "./components/pages/ExperiencSection/ExperiencePaymentSection";
import AdventureFirstSection from "./components/pages/AIsuggetionPart/AdvantureStepSection/AdventureFirstSection";
import AdventureSecondSection from "./components/pages/AIsuggetionPart/AdvantureStepSection/AdventureSecondSection";

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
        path: "/seat-plan",
        element: <SeatDetails></SeatDetails>,
      },
      {
        path: "/procced-to-payment",
        element: <PaymentSection></PaymentSection>,
      },
      {
        path: "/hotels",
        element: <DemoPage></DemoPage>,
      },
      {
        path: "/cars",
        element: <CarSearchSection></CarSearchSection>,
      },
      {
        path: "/plan-trip",
        element: <AdventureFirstSection></AdventureFirstSection>,
      },
      {
        path: "/rewards",
        element: <DemoPage></DemoPage>,
      },
      {
        path: "/car-details",
        element: <CarDetails></CarDetails>,
      },
      {
        path: "/driver-info",
        element: <DriverInfo></DriverInfo>,
      },
      {
        path: "/car-payment",
        element: <CarPayment></CarPayment>,
      },
      {
        path: "/experiences",
        element: <ExperienceSection></ExperienceSection>,
      },
      {
        path: "/experience-payment",
        element: <ExperiencePaymentSection></ExperiencePaymentSection>,
      },
      {
        path :"/second-step-adventure",
        element : <AdventureSecondSection></AdventureSecondSection>
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
