import React from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  //   {
  //     path: "/home/*",
  //     element: <DashboardLayout />,
  //   },
]);

export default routes;
