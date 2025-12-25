import { useState } from "react";
import {
  LayoutGrid,
  Users,
  FileText,
  Settings,
  ChevronLeft,
  ChevronDown
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [crmOpen, setCrmOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
        <ChevronLeft size={18} />
      </div>

      <div className="menu">
        <div className="menu-title" onClick={() => setCrmOpen(!crmOpen)}>
          <LayoutGrid size={18} />
          {!collapsed && <span>CRM</span>}
          {!collapsed && <ChevronDown size={14} />}
        </div>

        {crmOpen && (
          <div className="menu-items">
            <NavLink to="/crm/leads"><Users size={16}/> {!collapsed && "Leads"}</NavLink>
            <NavLink to="/crm/customers"><Users size={16}/> {!collapsed && "Customers"}</NavLink>
            <NavLink to="/crm/reports"><FileText size={16}/> {!collapsed && "Reports"}</NavLink>
          </div>
        )}
      </div>

      <div className="menu">
        <div className="menu-title" onClick={() => setSettingsOpen(!settingsOpen)}>
          <Settings size={18} />
          {!collapsed && <span>Settings</span>}
          {!collapsed && <ChevronDown size={14} />}
        </div>

        {settingsOpen && (
          <div className="menu-items">
            <NavLink to="/settings/profile"><Users size={16}/> {!collapsed && "Profile"}</NavLink>
          </div>
        )}
      </div>
    </aside>
  );
}
