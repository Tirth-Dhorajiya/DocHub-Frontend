import React from "react";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { allRoutes } from "./Routes";
import { UserProvider } from "./UserContext";

function App() {
  allRoutes.subscribe(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <UserProvider>
        <RouterProvider router={allRoutes} />

        <ToastContainer position="top-right" autoClose={3000} />
      </UserProvider>
    </>
  );
}

export default App;
