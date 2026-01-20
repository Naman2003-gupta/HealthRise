import React from "react";
import "./Calender.css";

const Calender = () => {
  // 👉 Later this can come from backend
  const upcoming = [
    {
      id: 1,
      title: "Monthly doctor's meet",
      date: "27 October, 2023",
      time: "04:00 PM",
    },
    {
      id: 2,
      title: "Check up",
      date: "29 October, 2023",
      time: "04:00 PM",
    },
    {
      id: 3,
      title: "Check up",
      date: "29 October, 2023",
      time: "04:00 PM",
    },
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-card">
        {/* Header */}
        <div className="calendar-header">
          <h3>Calendar</h3>
          <span className="arrow">⌄</span>
        </div>

        {/* Month */}
        <div className="calendar-month">
          <span>October 2023</span>
          <div className="month-nav">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>

        {/* Days */}
        <div className="calendar-days">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        {/* Dates */}
        <div className="calendar-dates">
          {[18, 19, 20, 21, 22, 23].map((d) => (
            <span key={d} className="disabled">
              {d}
            </span>
          ))}

          <span className="active">24</span>

          {[25, 26, 27, 28, 29, 30].map((d) => (
            <span key={d} className={d === 27 || d === 29 ? "dot" : ""}>
              {d}
            </span>
          ))}
        </div>

        {/* Upcoming */}
        <div className="upcoming-header">
          <h4>Upcoming</h4>
          <span className="view-all">View All</span>
        </div>

        <div className="upcoming-list">
          {upcoming.map((item) => (
            <div key={item.id} className="upcoming-item">
              <div className="avatar">👩‍⚕️</div>
              <div className="upcoming-details">
                <p className="title">{item.title}</p>
                <p className="time">
                  {item.date} | {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calender;
