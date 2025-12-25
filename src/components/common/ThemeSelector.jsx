import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeSelector() {
  const { setTheme } = useContext(ThemeContext);

  const themes = [
    { key: "blue", color: "#2f4fd8" },
    { key: "green", color: "#1e7f43" },
    { key: "purple", color: "#6a1bd1" },
    { key: "dark", color: "#222" }
  ];

  return (
    <div className="theme-selector">
      {themes.map(t => (
        <div
          key={t.key}
          className="theme-dot"
          style={{ background: t.color }}
          onClick={() => setTheme(t.key)}
        />
      ))}
    </div>
  );
}
