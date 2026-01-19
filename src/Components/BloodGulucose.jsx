import React from "react";
import "./BloodGulucose.css";

const BloodGlucose = () => {
  return (
    <div className="glucose-card">
      {/* Header */}
      <div className="glucose-header">
        <div className="glucose-icon">💧</div>
        <h4 className="glucose-title">Blood Glucose</h4>
      </div>

      {/* Value Row */}
      <div className="glucose-value">
        <div className="value-box">
          <span className="value-main">102</span>
        </div>
        <span className="value-unit">/ 72 mmhg</span>
      </div>

      {/* Status + Edit */}
      <div className="glucose-actions">
        <span className="glucose-status">Normal</span>
        <button className="edit-btn">Edit</button>
      </div>

      {/* Graph */}
      <svg className="glucose-graph" viewBox="0 0 240 80">
        <path
          d="M0 50 Q40 30 80 40 T160 30 T240 35"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default BloodGlucose;
