import { ReactNode, useState } from "react";

import { Theme, ThemeContext } from "./ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme") as Theme;
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //     document.documentElement.style.colorScheme = savedTheme;
  //   }
  // }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      document.documentElement.style.colorScheme = newTheme;
      document.body.setAttribute("data-theme", newTheme);
      // localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
