import React, { useEffect, useState } from "react";
import { Bell, Search, Menu } from "lucide-react"; // Added Menu icon
import "./Topbar.css";

const Topbar = ({
  sidebarCollapsed,
  sidebarOpen,
  setSidebarOpen,
  setSidebarCollapsed,
}) => {
  const [leftOffset, setLeftOffset] = useState(sidebarCollapsed ? 80 : 250);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth <= 1024) {
        setLeftOffset(sidebarOpen ? 250 : 0); // mobile overlay
      } else {
        setLeftOffset(sidebarCollapsed ? 80 : 250); // desktop
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);

    return () => window.removeEventListener("resize", updateOffset);
  }, [sidebarCollapsed, sidebarOpen]);

  // Function to toggle sidebar on mobile/tablet
  const handleMenuClick = () => {
    if (window.innerWidth <= 1024) {
      setSidebarOpen((prev) => !prev); // Toggle mobile sidebar
    } else {
      setSidebarCollapsed((prev) => !prev); // Toggle desktop collapsed state
    }
  };

  return (
    <div className="topbar-wrapper" style={{ left: `${leftOffset}px` }}>
      <div className="topbar-card">
        {/* Hamburger Menu Button - Visible on mobile/tablet */}
        <button className="hamburger-btn" onClick={handleMenuClick}>
          <Menu size={24} />
        </button>

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

export default Topbar;
