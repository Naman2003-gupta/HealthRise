import React from "react";
import "./ActivityGrowth.css";

const ActivityGrowth = () => {
  const weightData = [25, 30, 28, 35, 32, 40, 10, 85];
  const bmiData = [28, 35, 30, 20, 45, 38, 22, 90];

  return (
    <div className="activity-card">
      {/* Header */}
      <div className="activity-header">
        <div className="header-left">
          <h3>Activity Growth</h3>

          <div className="legend">
            <span>
              <span className="dot orange" /> My Weight
            </span>
            <span>
              <span className="dot blue" /> My BMI Record
            </span>
          </div>
        </div>

        <div className="date-box">
          <span className="date">📅 October 28th, 2023</span>
          <button className="edit-btn">Edit ✎</button>
        </div>
      </div>

      {/* Chart */}
      <div className="chart-container">
        <div className="y-axis">
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>

        <svg viewBox="0 0 600 220" className="chart-svg">
          {[0, 44, 88, 132, 176].map((y, i) => (
            <line
              key={i}
              x1="0"
              y1={y}
              x2="600"
              y2={y}
              stroke="#e5e7eb"
              strokeDasharray="4 4"
            />
          ))}

          <polyline
            fill="none"
            stroke="#f97316"
            strokeWidth="3"
            points={weightData
              .map((v, i) => `${i * 85},${200 - v * 2}`)
              .join(" ")}
          />

          <polyline
            fill="none"
            stroke="#2563eb"
            strokeWidth="3"
            points={bmiData.map((v, i) => `${i * 85},${200 - v * 2}`).join(" ")}
          />
        </svg>
      </div>

      {/* X Axis */}
      <div className="x-axis">
        <span>12/10</span>
        <span>13/10</span>
        <span>14/10</span>
        <span>15/10</span>
        <span>16/10</span>
      </div>
    </div>
  );
};

export default ActivityGrowth;
