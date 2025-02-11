import "./Layout.css";

import { Outlet } from "react-router";

import { Footer } from "./navbar-footer/Footer";
import { Navbar } from "./navbar-footer/Navbar";

export const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main>
        <div className="wrapper">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
