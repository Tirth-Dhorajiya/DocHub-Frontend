import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LastVisitedPageTracker from "./LastVisitedPageTracker"; // Import the tracker component
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Bookapp from "./Pages/Bookapp";
import Blog from "./Pages/Blog/Blog";
import Bookdetails from "./Pages/Bookapp/Bookdetails";
import Eroor404 from "./Pages/Eroor404";
import Terms from "./Pages/Terms/Terms";
import Policy from "./Pages/Policy/Policy";
import ContactUs from "./Pages/Contact-us/ContactUs";
import Blogdetails from "./Pages/Blog/Blogdetails";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Profile from "./Component/Profile";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import DoctorAppointments from "./Admin/DoctorAppointments";
import DoctorLogin from "./Component/DoctorLogin";
import DoctorDashboard from "./Component/DoctorDashboard";

const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LastVisitedPageTracker />
        <Home />
      </>
    ),
  },
  {
    path: "about-us",
    element: (
      <>
        <LastVisitedPageTracker />
        <About />
      </>
    ),
  },
  {
    path: "book-appointment",
    element: (
      <>
        <LastVisitedPageTracker />
        <Bookapp />
      </>
    ),
  },
  {
    path: "book-appointment/:id",
    element: (
      <>
        <LastVisitedPageTracker />
        <Bookdetails />
      </>
    ),
  },
  {
    path: "blog",
    element: (
      <>
        <LastVisitedPageTracker />
        <Blog />
      </>
    ),
  },
  {
    path: "blog/:id",
    element: (
      <>
        <LastVisitedPageTracker />
        <Blogdetails />
      </>
    ),
  },
  {
    path: "terms",
    element: (
      <>
        <LastVisitedPageTracker />
        <Terms />
      </>
    ),
  },
  {
    path: "policy",
    element: (
      <>
        <LastVisitedPageTracker />
        <Policy />
      </>
    ),
  },
  {
    path: "contactUs",
    element: (
      <>
        <LastVisitedPageTracker />
        <ContactUs />
      </>
    ),
  },
  {
    path: "signUp",
    element: (
      <>
        <LastVisitedPageTracker />
        <SignUp />
      </>
    ),
  },
  {
    path: "signIn",
    element: (
      <>
        <LastVisitedPageTracker />
        <SignIn />
      </>
    ),
  },
  {
    path: "profile",
    element: (
      <>
        <LastVisitedPageTracker />
        <Profile />
      </>
    ),
  },
  {
    path: "admin-login",
    element: (
      <>
        <LastVisitedPageTracker />
        <AdminLogin />
      </>
    ),
  },
  {
    path: "admin-dashboard",
    element: (
      <>
        <LastVisitedPageTracker />
        <AdminDashboard />
      </>
    ),
  },
  {
    path: "admin/appointments/:doctorId",
    element: (
      <>
        <LastVisitedPageTracker />
        <DoctorAppointments />
      </>
    ),
  },
  {
    path: "doctor-login",
    element: (
      <>
        <LastVisitedPageTracker />
        <DoctorLogin />
      </>
    ),
  },
  {
    path: "doctor-dashboard",
    element: (
      <>
        <LastVisitedPageTracker />
        <DoctorDashboard />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <LastVisitedPageTracker />
        <Eroor404 />
      </>
    ),
  },
]);
allRoutes.subscribe(() => {
  window.scrollTo(0, 0);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}></RouterProvider>
    <ToastContainer position="top-right" autoClose={3000} />
  </React.StrictMode>
);

reportWebVitals();
