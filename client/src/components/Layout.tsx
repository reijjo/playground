import "./Layout.css";

import { Outlet } from "react-router";

import { ThemeProvider } from "../context/theme/ThemeProvider";
import { Footer } from "./navbar-footer/Footer";
import { Navbar } from "./navbar-footer/Navbar";

export const Layout = () => {
  return (
    <ThemeProvider>
      <div className="layout-container">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
