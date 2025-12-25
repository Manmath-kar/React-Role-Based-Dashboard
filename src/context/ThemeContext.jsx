import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const LIGHT_COLORS = ["#FFFFFF", "#F7F7F7", "#E0E0E0", "#BDBDBD"];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("#5B4BDB");

  useEffect(() => {
    const isLight = LIGHT_COLORS.includes(theme.toUpperCase());
    document.body.classList.toggle("light-theme", isLight);
    document.documentElement.style.setProperty("--primary", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
