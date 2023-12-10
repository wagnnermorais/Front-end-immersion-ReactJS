import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Countdown from "./routes/Countdown.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CountDownProvider } from "./context/CountDownContenxt.jsx";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countdown",
        element: <Countdown />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountDownProvider>
      <RouterProvider router={router} />
    </CountDownProvider>
  </React.StrictMode>
);
