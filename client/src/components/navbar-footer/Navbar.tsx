import "./NavFooter.css";

import { NavLink } from "react-router";

import { useTheme } from "../../context/theme/ThemeContext";
import { useLogoutMutation } from "../../features/api/authApi";
import { logoutUser } from "../../features/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

export const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  const [logout, { isLoading, error }] = useLogoutMutation();
  const { user, isAuthenticated } = useAppSelector(
    (state: RootState) => state.auth,
  );

  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(logoutUser());
    } catch (error) {
      console.error(error);
    }
  };

  console.log("ERROR MUTATION", error);
  console.log("USER", user);

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
          {!isAuthenticated ? (
            <>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                REGISTER
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                LOGIN
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                DASHBOARD
              </NavLink>
              <button onClick={handleLogout}>
                {isLoading ? "Logging out..." : "LOGOUT"}
              </button>
            </>
          )}
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
