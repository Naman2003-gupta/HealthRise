import React from "react";
import "./MyHospitals.css";

const hospitals = [
  {
    name: "Medicare Hospital",
    location: "18 Iwaya Rd, Lagos",
    department: "Multi-specialty",
    doctors: 25,
    status: "Active",
  },
  {
    name: "Sunrise Clinic",
    location: "22 Main St, Lagos",
    department: "Cardiology",
    doctors: 12,
    status: "Active",
  },
  {
    name: "HealthCare Center",
    location: "12 Park Ave, Lagos",
    department: "Pediatrics",
    doctors: 18,
    status: "Inactive",
  },
];

const MyHospitals = () => {
  return (
    <div className="hospital-page">
      {/* Header */}
      <div className="page-header">
        <h1>My Hospitals</h1>
        <p>Manage and view hospitals connected to your account</p>
      </div>

      {/* Hospital List */}
      <div className="hospital-list">
        {hospitals.map((hospital, index) => (
          <div className="hospital-card" key={index}>
            <div className="hospital-left">
              <h3>{hospital.name}</h3>
              <p className="location">{hospital.location}</p>
              <span className="department">{hospital.department}</span>
            </div>

            <div className="hospital-right">
              <div className="meta">
                <p>
                  <strong>{hospital.doctors}</strong> Doctors
                </p>
                <span
                  className={`status ${
                    hospital.status === "Active" ? "active" : "inactive"
                  }`}
                >
                  {hospital.status}
                </span>
              </div>

              <div className="actions">
                <button className="secondary">View</button>
                <button className="primary">Manage</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHospitals;
