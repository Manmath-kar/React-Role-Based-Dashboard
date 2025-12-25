import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const COLORS = [
  "#5B4BDB","#2F80ED","#56CCF2","#6FCF97","#F2C94C",
  "#F2994A","#EB5757","#BB6BD9","#9B51E0","#27AE60",
  "#4F4F4F","#828282","#BDBDBD","#E0E0E0","#F7F7F7","#FFFFFF"
];

export default function ThemeGrid() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="theme-grid">
      {COLORS.map((c, i) => (
        <div
          key={i}
          className="theme-box"
          style={{ background: c }}
          onClick={() => setTheme(c)}
        />
      ))}
    </div>
  );
}
