import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const COLORS = [
  "#358f69ff","#d44558ff","#111827","#3F3F46","#2563EB","#0284C7","#0EA5E9","#b1d44eff","#22C55E","#c47e3cff","#F59E0B","#F97316","#DC2626","#7C3AED","#ea33bcff","#061431ff","#566b96ff","#FFFFFF"  
];

export default function ThemeGrid() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="theme-grid">
      {COLORS.map((color, index) => (
        <div
          key={index}
          className="theme-box"
          style={{ backgroundColor: color }}
          onClick={() => setTheme(color)}
          title={color}
        />
      ))}
    </div>
  );
}
