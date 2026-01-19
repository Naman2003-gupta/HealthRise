import React from "react";
import { Bell, Search, Calendar } from "lucide-react";
import "./Topbar.css";

const TopBar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="topbar-card">
        {/* Search */}
        <div className="search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search here..."
            className="search-input"
          />
        </div>

        {/* Right Section */}
        <div className="topbar-right">
          <button className="icon-btn">
            <Bell size={18} />
            <span className="notification-dot" />
          </button>

          <img src="https://i.pravatar.cc/40" alt="User" className="avatar" />

          

          
        </div>
      </div>
    </div>
  );
};

export default TopBar;
