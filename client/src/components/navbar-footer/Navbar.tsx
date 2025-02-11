import "./NavFooter.css";

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
          <p>LOGIN / REGISTER</p>
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
