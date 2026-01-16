import React from "react";
import { Bell, Search } from "lucide-react";
import "./TopBar.css";
const TopBar = () => {
  return (
    <header className="topbar">
      {/* Search */}
      <div className="search-wrapper">
        <Search size={19} className="search-icon" />
        <input
          type="text"
          placeholder="Search here.."
          className="search-input"
        />
      </div>

      {/* Right Actions */}
      <div className="topbar-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-dot" />
        </button>

        <img src="https://i.pravatar.cc/40" alt="User" className="avatar" />
      </div>
    </header>
  );
};

export default TopBar;
