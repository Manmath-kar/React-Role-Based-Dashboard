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
            <div className="dropdown-item profile-item">
              <User size={16} /> View Profile
            </div>

            <div className="dropdown-title">Themes</div>
            <ThemeGrid />

            <div className="dropdown-item logout">
              <LogOut size={16} /> Logout
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
