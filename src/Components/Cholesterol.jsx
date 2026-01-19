import React from "react";
import "./Cholesterol.css";

const Cholesterol = () => {
  return (
    <div className="cholesterol-card">
      {/* Header */}
      <div className="cholesterol-header">
        <div className="cholesterol-icon">🧪</div>
        <h4 className="cholesterol-title">Cholesterol Levels</h4>
      </div>

      {/* Value */}
      <div className="cholesterol-value">
        <div className="value-box">
          <span className="value-main">139</span>
        </div>
        <span className="value-unit">mg / dL</span>
      </div>

      {/* Status + Edit */}
      <div className="cholesterol-actions">
        <span className="cholesterol-status">Normal</span>
        <button className="edit-btn">Edit</button>
      </div>

      {/* Graph */}
      <svg className="cholesterol-graph" viewBox="0 0 240 80">
        <path
          d="M0 50 Q40 35 80 45 T160 30 T240 40"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Cholesterol;
