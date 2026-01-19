// src/Components/ConsultDoctor.jsx
import React from "react";
import "./ConsultDoctor.css";

const doctors = [
  {
    name: "Dr. Alison Ogaga",
    specialization: "General Practitioner",
    hospital: "Medicare Hospital, 18 Iwaya Rd, Lagos",
    time: "11:30 - 12:00 (30min)",
    img: "https://i.pravatar.cc/80?img=1",
  },
  {
    name: "Dr. Samuel Adeyemi",
    specialization: "Cardiologist",
    hospital: "Sunrise Clinic, 22 Main St, Lagos",
    time: "14:00 - 14:30 (30min)",
    img: "https://i.pravatar.cc/80?img=2",
  },
  {
    name: "Dr. Grace Nwosu",
    specialization: "Pediatrician",
    hospital: "HealthCare Center, 12 Park Ave, Lagos",
    time: "15:00 - 15:30 (30min)",
    img: "https://i.pravatar.cc/80?img=3",
  },
];

const ConsultDoctor = () => {
  return (
    <div className="consult-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>Consult a Doctor</h1>
        <p>Choose a specialist and book your appointment easily</p>
      </div>

      {/* Doctor Grid */}
      <div className="doctor-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <div className="doctor-top">
              <img src={doc.img} alt={doc.name} />
              <div>
                <h3>{doc.name}</h3>
                <span>{doc.specialization}</span>
              </div>
            </div>

            <div className="doctor-details">
              <p>{doc.hospital}</p>
              <p className="time">{doc.time}</p>
            </div>

            <div className="doctor-actions">
              <button className="secondary">Reschedule</button>
              <button className="primary">Book Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultDoctor;
