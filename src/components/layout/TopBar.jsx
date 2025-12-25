import { useState } from "react";
import permissions from "../../config/permissions.json";
import ThemeSelector from "../common/ThemeSelector";

export default function TopBar() {
  const { user } = permissions;
  const [open, setOpen] = useState(false);

  const logout = () => {
    alert("Logged out");
  };

  return (
    <header className="topbar">
      <span>Welcome {user.name}</span>

      <div className="profile-wrapper">
        <div
          className="profile-trigger"
          onClick={() => setOpen(prev => !prev)}
        >
          {user.role}
          <span className="caret">▾</span>
        </div>

        {open && (
          <div className="profile-dropdown">
            <span className="dropdown-title">Theme</span>
            <ThemeSelector />

            <div className="dropdown-divider" />

            <button className="logout-btn" onClick={logout}>
              <span className="logout-icon" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
