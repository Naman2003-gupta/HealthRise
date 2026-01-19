import React from "react";
import "./BloodPressure.css";

const BloodPressure = () => {
  return (
    <div className="pressure-card">
      {/* Header */}
      <div className="pressure-header">
        <div className="pressure-icon">❤️</div>
        <h4 className="pressure-title">Blood Pressure</h4>
      </div>

      {/* Value */}
      <div className="pressure-value">
        <div className="value-box">
          <span className="value-main">98</span>
        </div>
        <span className="value-unit">bpm</span>
      </div>

      {/* Status + Edit */}
      <div className="pressure-actions">
        <span className="pressure-status">Normal</span>
        <button className="edit-btn">Edit</button>
      </div>

      {/* Graph */}
      <svg className="pressure-graph" viewBox="0 0 240 80">
        <path
          d="M0 45 Q40 55 80 40 T160 35 T240 45"
          fill="none"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default BloodPressure;
