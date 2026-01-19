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
          <div className="appointment-row" key={index}>
            <div className="doctor-info">
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <span>{item.specialization}</span>
              </div>
            </div>

            <div className="appointment-meta">
              <p>{item.date}</p>
              <p>{item.time}</p>
              <p>{item.hospital}</p>
            </div>

            <div className="appointment-actions">
              <span className={`status ${item.status.toLowerCase()}`}>
                {item.status}
              </span>
              <button className="secondary">Reschedule</button>
              <button className="primary">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
