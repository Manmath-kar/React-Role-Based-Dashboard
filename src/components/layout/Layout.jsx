import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import "../../styles/layout.css";

export default function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main">
        <TopBar />
        <div className="content">
          <div className="content-inner">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
