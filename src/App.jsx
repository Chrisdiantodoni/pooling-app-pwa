import React from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
