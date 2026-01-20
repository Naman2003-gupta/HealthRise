import React from "react";
import "./Welcome.css";

const WelcomeCard = () => {
  return (
    <div className="welcome-card">
      {/* Left */}
      <div className="welcome-text">
        <h2>Welcome Jack</h2>
        <p>
          It's a sunny day today, we hope you're taking good care of your health
          👋
        </p>
      </div>

      {/* Right */}
      <div className="welcome-actions">
        <button className="new-activity-btn">+ New Health Activity</button>

        <div className="date-box">
          <div className="date-icon-wrapper">
            <span className="date-icon">📅</span>
          </div>
          <div className="date-content">
            <span className="date-label">Date</span>
            <span className="date-value">24th October, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
