import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  activePage,
  setActivePage,
  sidebarCollapsed,
  setSidebarCollapsed,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const handleNavigate = (page) => {
    setActivePage(page);

    // Auto-close sidebar on mobile
    if (window.innerWidth <= 1024) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    if (window.innerWidth <= 1024) {
      setSidebarOpen(!sidebarOpen); // mobile toggle
    } else {
      setSidebarCollapsed(!sidebarCollapsed); // desktop collapse
    }
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      {sidebarOpen && window.innerWidth <= 1024 && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`sidebar
          ${sidebarCollapsed ? "collapsed" : ""}
          ${sidebarOpen ? "mobile-open" : ""}
        `}
      >
        {/* LOGO / TOGGLE */}
        <div className="logo" onClick={toggleSidebar}>
          <span className="logo-icon">💊</span>
          <span className="logo-text">HealthRise</span>
        </div>

        {/* MENU */}
        <nav className="menu">
          <button
            className={`menu-item ${activePage === "dashboard" ? "active" : ""}`}
            onClick={() => handleNavigate("dashboard")}
          >
            <span className="icon">🏠</span>
            <span className="label">Dashboard</span>
          </button>

          <button
            className={`menu-item ${activePage === "ConsultDoctor" ? "active" : ""}`}
            onClick={() => handleNavigate("ConsultDoctor")}
          >
            <span className="icon">👨‍⚕️</span>
            <span className="label">Consult Doctor</span>
          </button>

          <button
            className={`menu-item ${activePage === "Appointments" ? "active" : ""}`}
            onClick={() => handleNavigate("Appointments")}
          >
            <span className="icon">📅</span>
            <span className="label">Appointments</span>
          </button>

          <button
            className={`menu-item ${activePage === "MedicalHistory" ? "active" : ""}`}
            onClick={() => handleNavigate("MedicalHistory")}
          >
            <span className="icon">📄</span>
            <span className="label">Medical History</span>
          </button>

          <button
            className={`menu-item ${activePage === "MyHospitals" ? "active" : ""}`}
            onClick={() => handleNavigate("MyHospitals")}
          >
            <span className="icon">🏥</span>
            <span className="label">My Hospitals</span>
          </button>

          <button
            className={`menu-item ${activePage === "Analytics" ? "active" : ""}`}
            onClick={() => handleNavigate("Analytics")}
          >
            <span className="icon">📊</span>
            <span className="label">Analytics</span>
          </button>
        </nav>

        {/* ACCOUNT */}
        <div className="integrations">
          <p className="section-title">Account</p>

          <div className="profile">
            <img src="https://i.pravatar.cc/100" alt="profile" />
            <div className="profile-info">
              <div className="name">Suraj Kumar</div>
              <div className="email">suraj@email.com</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
