import React from "react";
import "./RecentConsultations.css";

const consultations = [
  {
    id: 1,
    name: "Dr. Alison",
    role: "Practitioner",
    avatar: "https://i.pravatar.cc/150?img=47",
    online: true,
  },
  {
    id: 2,
    name: "Dr. Patel",
    role: "Practitioner",
    avatar: "https://i.pravatar.cc/150?img=12",
    online: true,
  },
  {
    id: 3,
    name: "Dr. Smith",
    role: "Health",
    avatar: "https://i.pravatar.cc/150?img=56",
    online: true,
  },
  {
    id: 4,
    name: "Dr. Chen",
    role: "Health",
    avatar: "https://i.pravatar.cc/150?img=32",
    online: true,
  },
];

const RecentConsultations = () => {
  return (
    <div className="recent-card">
      {/* Header */}
      <div className="recent-header">
        <h3>Recent Consultations</h3>
        <span className="see-all">See all →</span>
      </div>

      {/* Body */}
      <div className="recent-grid">
        {consultations.map((doc) => (
          <div key={doc.id} className="recent-item">
            <div className="doctor-left">
              <div className="avatar">
                <img src={doc.avatar} alt={doc.name} />
                {doc.online && <span className="status-dot" />}
              </div>

              <div className="doctor-text">
                <p className="doctor-name">{doc.name}</p>
                <p className="doctor-role">{doc.role}</p>
              </div>
            </div>

            <button className="message-btn">Message</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentConsultations;
