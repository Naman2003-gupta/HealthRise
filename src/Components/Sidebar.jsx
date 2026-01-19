import "./Sidebar.css";
import ConsultDoctor from "./ConsultDoctor";
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
          className={`menu-item ${activePage === "ConsultDoctor" ? "active" : ""}`}
          onClick={() => setActivePage("ConsultDoctor")}
        >
          Consult a Doctor
        </button>

        <button
          className={`menu-item ${activePage === "Appointments" ? "active" : ""}`}
          onClick={() => setActivePage("Appointments")}
        >
          Appointments
        </button>

        <button
          className={`menu-item ${activePage === "MedicalHistory" ? "active" : ""}`}
          onClick={() => setActivePage("MedicalHistory")}
        >
          Medical History
        </button>

        <button
          className={`menu-item ${activePage === "MyHospitals" ? "active" : ""}`}
          onClick={() => setActivePage("MyHospitals")}
        >
          My Hospitals
        </button>

        <button
          className={`menu-item ${activePage === "Analytics" ? "active" : ""}`}
          onClick={() => setActivePage("Analytics")}
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
