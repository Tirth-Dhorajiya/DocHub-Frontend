import React from "react";
import { Outlet } from "react-router-dom"; // Outlet is key!
import Header from "./common/Header/Header"; // Import Header
import Footer from "./common/Footer/Footer"; // Import Footer
import LastVisitedPageTracker from "./LastVisitedPageTracker";
import ScrollToTop from "react-scroll-to-top";

const Layout = () => {
  return (
    <>
      <LastVisitedPageTracker />
      <Header />
      <Outlet /> {/* This is where child components will be rendered */}
      <Footer />
      <ScrollToTop smooth color="#028885" />
    </>
  );
};

export default Layout;
