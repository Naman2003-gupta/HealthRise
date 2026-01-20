import React from "react";
import "./Appointments.css";

const appointments = [
  {
    name: "Dr. Alison Ogaga",
    specialization: "General Practitioner",
    date: "October 28th, 2023",
    time: "11:30 - 12:00 (30min)",
    hospital: "Medicare Hospital, 18 Iwaya Rd, Lagos",
    img: "https://i.pravatar.cc/60?img=1",
    status: "Confirmed",
  },
  {
    name: "Dr. Samuel Adeyemi",
    specialization: "Cardiologist",
    date: "October 30th, 2023",
    time: "14:00 - 14:30 (30min)",
    hospital: "Sunrise Clinic, 22 Main St, Lagos",
    img: "https://i.pravatar.cc/60?img=2",
    status: "Pending",
  },
];

const Appointments = () => {
  return (
    <div className="appointments-page">
      {/* Page Header */}
      <div className="appointments-header">
        <h1>Appointments</h1>
        <p>View and manage all your medical appointments</p>
      </div>

      {/* Appointments List */}
      <div className="appointments-list">
        {appointments.map((item, index) => (
          <div className="appointment-card" key={index}>
            <div className="appointment-content">
              {/* Doctor Info */}
              <div className="doctor-info">
                <img src={item.img} alt={item.name} className="doctor-img" />
                <div className="doctor-details">
                  <h3 className="doctor-name">{item.name}</h3>
                  <span className="doctor-specialization">
                    {item.specialization}
                  </span>
                  <span
                    className={`status-mobile ${item.status.toLowerCase()}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="appointment-meta">
                <div className="meta-item">
                  <span className="meta-label">Date</span>
                  <p className="meta-value">{item.date}</p>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Time</span>
                  <p className="meta-value">{item.time}</p>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Hospital</span>
                  <p className="meta-value hospital-text">{item.hospital}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="appointment-actions">
                <span className={`status-desktop ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
                <div className="action-buttons">
                  <button className="btn-secondary">Reschedule</button>
                  <button className="btn-primary">Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
