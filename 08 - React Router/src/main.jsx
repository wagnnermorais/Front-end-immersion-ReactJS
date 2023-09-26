import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Configurando Router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Contact from "./routes/Contact.jsx";

// Página de Erro
import ErrorPage from "./routes/ErrorPage.jsx";

// Componente base
import Home from "./routes/Home.jsx";

// Rota Dinâmica
import Product from "./routes/Product.jsx";

// Nested Route
import Info from "./routes/Info.jsx";

const router = createBrowserRouter([
  {
    path: "", // Onde são configuradas o "nome" das rotas
    element: <App />, // Sempre será um componente
    errorElement: <ErrorPage />, // Página de erro
    children: [
      // Componente base
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // Rota Dinâmica
      {
        path: "products/:id",
        element: <Product />,
      },
      // Nested Route
      {
        path: "products/:id/info",
        element: <Info />,
      },
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
