import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Create from "./routes/Create.jsx";
import Post from "./routes/Post.jsx";
import Admin from "./routes/Admin.jsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route>
        <App />
      </Route>
    </RouterProvider>
  </React.StrictMode>
);
