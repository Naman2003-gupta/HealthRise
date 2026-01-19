import React from "react";
import "./QuickActions.css";

const actions = [
  {
    id: 1,
    title: "Book an Appointment",
    desc: "Find a doctor and specialization",
    icon: "📅",
  },
  {
    id: 2,
    title: "Request Consultation",
    desc: "Talk to a specialist",
    icon: "💬",
  },
  {
    id: 3,
    title: "Locate a hospital near you",
    desc: "Find closest hospitals",
    icon: "📍",
  },
  {
    id: 4,
    title: "Emergency",
    desc: "Request immediate help",
    icon: "📢",
  },
];

const QuickActions = () => {
  return (
    <div className="quick-card">
      <h3 className="quick-title">Quick Actions</h3>

      <div className="quick-list">
        {actions.map((item) => (
          <div key={item.id} className="quick-item">
            <div className="quick-left">
              <div className="quick-icon">{item.icon}</div>

              <div className="quick-text">
                <p className="quick-main">{item.title}</p>
                <p className="quick-sub">{item.desc}</p>
              </div>
            </div>

            <span className="quick-arrow">›</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
