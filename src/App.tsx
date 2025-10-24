import "./App.css";
import Users from "./pages/Users";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import * as Sentry from "@sentry/react";

const createRouter = Sentry.wrapCreateBrowserRouterV7(createBrowserRouter);

const router = createRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
