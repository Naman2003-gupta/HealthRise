import React, { useState } from "react";
import "./Analytics.css";

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState("30days");
  const [selectedMetric, setSelectedMetric] = useState("bloodGlucose");

  // Health data matching your theme
  const healthData = {
    bloodGlucose: [
      { date: "Mon", value: 120, status: "normal" },
      { date: "Tue", value: 118, status: "normal" },
      { date: "Wed", value: 125, status: "normal" },
      { date: "Thu", value: 115, status: "normal" },
      { date: "Fri", value: 122, status: "normal" },
      { date: "Sat", value: 119, status: "normal" },
      { date: "Sun", value: 121, status: "normal" },
    ],
    bloodPressure: [
      { date: "Mon", value: "120/80", status: "normal" },
      { date: "Tue", value: "118/78", status: "normal" },
      { date: "Wed", value: "122/82", status: "normal" },
      { date: "Thu", value: "119/79", status: "normal" },
      { date: "Fri", value: "121/81", status: "normal" },
      { date: "Sat", value: "117/77", status: "normal" },
      { date: "Sun", value: "120/80", status: "normal" },
    ],
    cholesterol: [
      { date: "Mon", value: 180, status: "normal" },
      { date: "Tue", value: 185, status: "normal" },
      { date: "Wed", value: 178, status: "normal" },
      { date: "Thu", value: 182, status: "normal" },
      { date: "Fri", value: 179, status: "normal" },
      { date: "Sat", value: 183, status: "normal" },
      { date: "Sun", value: 181, status: "normal" },
    ],
    weight: [
      { date: "Mon", value: 75.0, status: "normal" },
      { date: "Tue", value: 74.5, status: "good" },
      { date: "Wed", value: 74.0, status: "good" },
      { date: "Thu", value: 73.8, status: "good" },
      { date: "Fri", value: 73.5, status: "good" },
      { date: "Sat", value: 73.2, status: "good" },
      { date: "Sun", value: 73.0, status: "good" },
    ],
  };

  // Health metrics - matching your medical theme
  const healthMetrics = [
    {
      name: "Blood Glucose",
      current: "121 mg/dL",
      target: "70-130 mg/dL",
      status: "Normal",
      icon: "🩸",
      color: "#FF6B6B",
      change: "-2%",
      trend: "improving",
    },
    {
      name: "Blood Pressure",
      current: "120/80",
      target: "<140/90",
      status: "Optimal",
      icon: "❤️",
      color: "#4ECDC4",
      change: "-3%",
      trend: "stable",
    },
    {
      name: "Cholesterol",
      current: "181 mg/dL",
      target: "<200 mg/dL",
      status: "Normal",
      icon: "🧪",
      color: "#45B7D1",
      change: "+1%",
      trend: "monitor",
    },
    {
      name: "Weight",
      current: "73.0 kg",
      target: "70-75 kg",
      status: "Healthy",
      icon: "⚖️",
      color: "#96CEB4",
      change: "-2.6%",
      trend: "improving",
    },
    {
      name: "Heart Rate",
      current: "72 bpm",
      target: "60-100 bpm",
      status: "Normal",
      icon: "💓",
      color: "#FF9A8B",
      change: "-4%",
      trend: "improving",
    },
    {
      name: "Daily Steps",
      current: "8,542",
      target: "10,000",
      status: "Good",
      icon: "👣",
      color: "#5D6D7E",
      change: "+12%",
      trend: "improving",
    },
  ];

  const medications = [
    {
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      adherence: "95%",
      nextDose: "8:00 PM",
      type: "Diabetes",
    },
    {
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      adherence: "88%",
      nextDose: "9:00 AM",
      type: "Blood Pressure",
    },
    {
      name: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily",
      adherence: "92%",
      nextDose: "10:00 PM",
      type: "Cholesterol",
    },
  ];

  const recentActivities = [
    {
      date: "Today, 10:30 AM",
      activity: "Blood glucose check",
      value: "121 mg/dL",
      status: "normal",
    },
    {
      date: "Today, 8:15 AM",
      activity: "Medication taken",
      value: "Metformin 500mg",
      status: "completed",
    },
    {
      date: "Yesterday, 7:00 PM",
      activity: "Evening walk",
      value: "4,215 steps",
      status: "completed",
    },
    {
      date: "Yesterday, 9:00 AM",
      activity: "Blood pressure check",
      value: "118/78 mmHg",
      status: "normal",
    },
  ];

  const getMetricData = () => {
    return healthData[selectedMetric] || [];
  };

  const getMetricTitle = () => {
    const titles = {
      bloodGlucose: "Blood Glucose",
      bloodPressure: "Blood Pressure",
      cholesterol: "Cholesterol",
      weight: "Weight",
    };
    return titles[selectedMetric] || "Metric";
  };

  const getMetricUnit = () => {
    const units = {
      bloodGlucose: "mg/dL",
      bloodPressure: "mmHg",
      cholesterol: "mg/dL",
      weight: "kg",
    };
    return units[selectedMetric] || "";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "normal":
      case "good":
      case "optimal":
      case "healthy":
      case "completed":
        return "#10B981";
      case "warning":
      case "monitor":
        return "#F59E0B";
      case "critical":
      case "high":
        return "#EF4444";
      default:
        return "#6B7280";
    }
  };

  return (
    <div className="analytics-health">
      {/* Header */}
      <div className="analytics-header">
        <div className="header-left">
          <h1>Health Analytics</h1>
          <p className="subtitle">Track your health progress and vital signs</p>
        </div>
        <div className="header-actions">
          <button className="btn-outline">
            <span className="icon">📊</span>
            Export Report
          </button>
          <button className="btn-primary">
            <span className="icon">👨‍⚕️</span>
            Share with Doctor
          </button>
        </div>
      </div>

      {/* Time Range Filter */}
      <div className="time-filter">
        <div className="filter-label">
          <span className="icon">📅</span>
          View Period:
        </div>
        <div className="filter-options">
          {["7days", "30days", "90days"].map((range) => (
            <button
              key={range}
              className={`filter-btn ${timeRange === range ? "active" : ""}`}
              onClick={() => setTimeRange(range)}
            >
              {range === "7days"
                ? "Last 7 Days"
                : range === "30days"
                  ? "Last 30 Days"
                  : "Last 90 Days"}
            </button>
          ))}
        </div>
      </div>

      {/* Health Overview Cards */}
      <div className="overview-cards">
        <div className="overview-card">
          <div
            className="card-icon"
            style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)" }}
          >
            <span>📈</span>
          </div>
          <div className="card-content">
            <h3>Health Score</h3>
            <div className="card-value">87/100</div>
            <p className="card-change positive">+5% from last month</p>
          </div>
        </div>

        <div className="overview-card">
          <div
            className="card-icon"
            style={{ background: "linear-gradient(135deg, #4ECDC4, #6EE7E7)" }}
          >
            <span>✅</span>
          </div>
          <div className="card-content">
            <h3>Medication Adherence</h3>
            <div className="card-value">92%</div>
            <p className="card-change positive">Excellent compliance</p>
          </div>
        </div>

        <div className="overview-card">
          <div
            className="card-icon"
            style={{ background: "linear-gradient(135deg, #45B7D1, #66D9E8)" }}
          >
            <span>🎯</span>
          </div>
          <div className="card-content">
            <h3>Goals Achieved</h3>
            <div className="card-value">4/6</div>
            <p className="card-change positive">Keep it up!</p>
          </div>
        </div>

        <div className="overview-card">
          <div
            className="card-icon"
            style={{ background: "linear-gradient(135deg, #96CEB4, #B8E6B8)" }}
          >
            <span>👣</span>
          </div>
          <div className="card-content">
            <h3>Activity Level</h3>
            <div className="card-value">Active</div>
            <p className="card-change positive">12% more active</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Left Column - Charts */}
        <div className="content-left">
          <div className="chart-section">
            <div className="section-header">
              <h2>
                <span className="icon">📊</span>
                {getMetricTitle()} Trend
              </h2>
              <div className="metric-selector">
                {["bloodGlucose", "bloodPressure", "cholesterol", "weight"].map(
                  (metric) => (
                    <button
                      key={metric}
                      className={`metric-btn ${selectedMetric === metric ? "active" : ""}`}
                      onClick={() => setSelectedMetric(metric)}
                    >
                      {metric === "bloodGlucose"
                        ? "Glucose"
                        : metric === "bloodPressure"
                          ? "Pressure"
                          : metric === "cholesterol"
                            ? "Cholesterol"
                            : "Weight"}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="chart-container">
              <div className="chart-bars">
                {getMetricData().map((item, index) => (
                  <div key={index} className="bar-column">
                    <div className="bar-label">{item.date}</div>
                    <div className="bar-wrapper">
                      <div
                        className="bar"
                        style={{
                          height:
                            typeof item.value === "number"
                              ? `${(item.value / 200) * 80}px`
                              : "60px",
                          backgroundColor: getStatusColor(item.status),
                        }}
                      >
                        <div className="bar-value">
                          {typeof item.value === "number"
                            ? item.value
                            : item.value}
                        </div>
                      </div>
                    </div>
                    <div className="bar-unit">
                      {typeof item.value === "number" ? getMetricUnit() : ""}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="activities-section">
            <div className="section-header">
              <h2>
                <span className="icon">📝</span>
                Recent Activities
              </h2>
              <button className="view-all">View All →</button>
            </div>
            <div className="activities-list">
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-icon">
                    {activity.status === "normal" ||
                    activity.status === "completed"
                      ? "✅"
                      : "⚠️"}
                  </div>
                  <div className="activity-content">
                    <div className="activity-title">{activity.activity}</div>
                    <div className="activity-details">
                      <span className="activity-time">{activity.date}</span>
                      <span className="activity-value">{activity.value}</span>
                    </div>
                  </div>
                  <div
                    className="activity-status"
                    style={{ color: getStatusColor(activity.status) }}
                  >
                    {activity.status.charAt(0).toUpperCase() +
                      activity.status.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Metrics & Medications */}
        <div className="content-right">
          {/* Health Metrics */}
          <div className="metrics-section">
            <div className="section-header">
              <h2>
                <span className="icon">❤️</span>
                Health Metrics
              </h2>
            </div>
            <div className="metrics-grid">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-header">
                    <div
                      className="metric-icon"
                      style={{ backgroundColor: metric.color }}
                    >
                      {metric.icon}
                    </div>
                    <div className="metric-info">
                      <h4>{metric.name}</h4>
                      <div
                        className="metric-status"
                        style={{ color: getStatusColor(metric.status) }}
                      >
                        {metric.status}
                      </div>
                    </div>
                  </div>
                  <div className="metric-value">{metric.current}</div>
                  <div className="metric-details">
                    <span className="metric-target">
                      Target: {metric.target}
                    </span>
                    <span className={`metric-change ${metric.trend}`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width:
                          metric.trend === "improving"
                            ? "85%"
                            : metric.trend === "stable"
                              ? "75%"
                              : "60%",
                        backgroundColor: metric.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Medications */}
          <div className="medications-section">
            <div className="section-header">
              <h2>
                <span className="icon">💊</span>
                Current Medications
              </h2>
              <button className="add-btn">+ Add</button>
            </div>
            <div className="medications-list">
              {medications.map((med, index) => (
                <div key={index} className="medication-card">
                  <div className="medication-header">
                    <div className="medication-name">{med.name}</div>
                    <div className="medication-type">{med.type}</div>
                  </div>
                  <div className="medication-details">
                    <div className="detail-item">
                      <span className="detail-label">Dosage:</span>
                      <span className="detail-value">{med.dosage}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Frequency:</span>
                      <span className="detail-value">{med.frequency}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Next Dose:</span>
                      <span className="detail-value highlight">
                        {med.nextDose}
                      </span>
                    </div>
                  </div>
                  <div className="medication-footer">
                    <div className="adherence">
                      <span>Adherence:</span>
                      <span
                        className="adherence-value"
                        style={{ color: getStatusColor("normal") }}
                      >
                        {med.adherence}
                      </span>
                    </div>
                    <button className="reminder-btn">Set Reminder</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Health Tips */}
      <div className="health-tips">
        <div className="section-header">
          <h2>
            <span className="icon">💡</span>
            Health Tips
          </h2>
        </div>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">🥗</div>
            <h3>Diet Recommendation</h3>
            <p>
              Increase fiber intake with more vegetables and whole grains to
              help manage cholesterol levels.
            </p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🚶‍♂️</div>
            <h3>Exercise Tip</h3>
            <p>
              Take a 30-minute walk after dinner to help regulate blood sugar
              levels naturally.
            </p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">💤</div>
            <h3>Sleep Advice</h3>
            <p>
              Aim for 7-8 hours of quality sleep to support blood pressure
              regulation and recovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
