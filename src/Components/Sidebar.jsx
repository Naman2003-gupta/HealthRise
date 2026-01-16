import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon">💊</span>
        <span className="logo-text">HealthRise</span>
      </div>

      {/* Main Menu */}
      <nav className="menu">
        <a href="#" className="menu-item active">
          Dashboard
        </a>
        <a href="#" className="menu-item">
          Consult a Doctor
        </a>
        <a href="#" className="menu-item">
          Appointments
        </a>
        <a href="#" className="menu-item">
          Medical History
        </a>
        <a href="#" className="menu-item">
          My Hospitals
        </a>
        <a href="#" className="menu-item">
          Analytics
        </a>
      </nav>

      {/* Integrations */}
      <div className="integrations">
        <p className="section-title">Integrations</p>
        <a href="#" className="menu-item">
          Google Drive
        </a>
        <a href="#" className="menu-item">
          Paypal
        </a>
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
