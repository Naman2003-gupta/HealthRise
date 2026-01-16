import React from 'react'
import "./Welcome.css";

const WelcomeCard = () => {
  return (
    <div className="welcome-card">
      {/* Left */}
      <div className="welcome-text">
        <h2>Welcome Jack </h2>
        <p>
          It’s a sunny day today, we hope you’re taking good care of your
          health👋
        </p>
      </div>

      {/* Right */}
      <div className="welcome-actions">
        <button className="new-activity-btn">+ New Health Activity</button>

        <div className="date-box">
          <span>Date</span><br></br>
          <span className="date-icon">📅</span>
          <span>24th October, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
