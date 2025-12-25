import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import "../../styles/layout.css";

export default function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-section">
        <TopBar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
