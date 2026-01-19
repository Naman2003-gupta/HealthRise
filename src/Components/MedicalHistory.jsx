import React from "react";
import "../App.css";
import "./MedicalHistory.css";

const historyData = [
  {
    doctor: "Dr. Alison Ogaga",
    specialization: "General Practitioner",
    date: "12 Oct 2023",
    hospital: "Medicare Hospital, Lagos",
    status: "Completed",
  },
  {
    doctor: "Dr. Patel",
    specialization: "Cardiologist",
    date: "05 Sep 2023",
    hospital: "Sunrise Clinic, Lagos",
    status: "Completed",
  },
  {
    doctor: "Dr. Chen",
    specialization: "Health Specialist",
    date: "22 Aug 2023",
    hospital: "HealthCare Center, Lagos",
    status: "Completed",
  },
];

const MedicalHistory = () => {
  return (
    <div className="medical-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>Medical History</h1>
        <p>View all your past consultations and medical records.</p>
      </div>

      {/* History List */}
      <div className="history-list">
        {historyData.map((item, index) => (
          <div className="history-card" key={index}>
            <div>
              <h3>{item.doctor}</h3>
              <p className="specialization">{item.specialization}</p>
              <p className="hospital">{item.hospital}</p>
            </div>

            <div className="history-meta">
              <span className="date">{item.date}</span>
              <span className="status">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalHistory;
