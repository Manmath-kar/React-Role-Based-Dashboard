import permissions from "../../config/permissions.json";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {permissions.permissions
        .filter(menu => menu.enabled)
        .map(menu => (
          <div key={menu.id} className="menu-block">
            <h4>{menu.label}</h4>
            {menu.children
              .filter(child => child.enabled)
              .map(child => (
                <NavLink key={child.id} to={child.path} className="menu-link">
                  • {child.label}
                </NavLink>
              ))}
          </div>
        ))}
    </aside>
  );
}
