import "./NavFooter.css";

import { NavLink } from "react-router";

import { useTheme } from "../../context/theme/ThemeContext";

export const Navbar = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <nav>
      <div className="wrapper nav-wrapper">
        <div className="nav-left">
          <h1>Playground</h1>
        </div>
        <div className="nav-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            LOGIN / REGISTER
          </NavLink>
        </div>
        <div className="nav-right">
          <button onClick={toggleTheme}>
            Use {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </nav>
  );
};
