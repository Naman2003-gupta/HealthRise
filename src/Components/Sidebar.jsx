import "./Sidebar.css";

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon">💊</span>
        <span className="logo-text">HealthRise</span>
      </div>

      {/* Main Menu */}
      <nav className="menu">
        <button
          className={`menu-item ${activePage === "dashboard" ? "active" : ""}`}
          onClick={() => setActivePage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={`menu-item ${activePage === "doctor" ? "active" : ""}`}
          onClick={() => setActivePage("doctor")}
        >
          Consult a Doctor
        </button>

        <button
          className={`menu-item ${activePage === "appointments" ? "active" : ""}`}
          onClick={() => setActivePage("appointments")}
        >
          Appointments
        </button>

        <button
          className={`menu-item ${activePage === "history" ? "active" : ""}`}
          onClick={() => setActivePage("history")}
        >
          Medical History
        </button>

        <button
          className={`menu-item ${activePage === "hospitals" ? "active" : ""}`}
          onClick={() => setActivePage("hospitals")}
        >
          My Hospitals
        </button>

        <button
          className={`menu-item ${activePage === "analytics" ? "active" : ""}`}
          onClick={() => setActivePage("analytics")}
        >
          Analytics
        </button>
      </nav>

      {/* Integrations */}
      <div className="integrations">
        <p className="section-title">Integrations</p>
        <button className="menu-item">Google Drive</button>
        <button className="menu-item">Paypal</button>
      </div>

      {/* Profile */}
      <div className="profile">
        <img src="https://i.pravatar.cc/40" alt="User" />
        <div className="profile-info">
          <p className="name">Jack Ezendu</p>
          <p className="email">jack@healthrise.ai</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
