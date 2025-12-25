import { useState } from "react";
import { MoreVertical, User, LogOut } from "lucide-react";
import ThemeGrid from "../common/ThemeGrid";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <span>Welcome back 👋</span>

      <div className="profile">
        <div className="avatar">JA</div>
        <span>Alex CRM Admin</span>
        <MoreVertical onClick={() => setOpen(!open)} />

        {open && (
          <div className="dropdown">
            {/* VIEW PROFILE */}
            <div className="dropdown-section">
              <div className="dropdown-item profile-item">
                <User size={16} />
                View Profile
              </div>
            </div>

            {/* THEMES */}
            <div className="dropdown-section">
              <div className="dropdown-title">Themes</div>
              <ThemeGrid />
            </div>

            {/* LOGOUT */}
            <div className="dropdown-section logout">
              <div className="dropdown-item">
                <LogOut size={16} />
                Logout
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
