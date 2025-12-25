import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function isLight(hex) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substr(0, 2), 16);
  const g = parseInt(c.substr(2, 2), 16);
  const b = parseInt(c.substr(4, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("#5B4BDB");

  useEffect(() => {
    const light = isLight(theme);

    document.documentElement.style.setProperty("--primary", theme);
    document.documentElement.style.setProperty(
      "--text-color",
      light ? "#111827" : "#ffffff"
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
