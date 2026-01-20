import React from "react";
import "./Upcoming.css";

const Upcoming = () => {
  return (
    <div className="ua-wrapper">
      {/* Header */}
      <div className="ua-header">
        <h3>Upcoming Appointment</h3>
        <span className="ua-view">View All</span>
      </div>

      {/* Appointment Card */}
      <div className="ua-card">
        {/* Top section */}
        <div className="ua-top">
          {/* Left - Doctor Info */}
          <div className="ua-doctor">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="doctor"
              className="ua-doctor-img"
            />

            <div className="ua-doctor-info">
              <h4>Dr. Alison Ogaga</h4>
              <p>General Practitioner</p>
            </div>
          </div>

          {/* Right - Appointment Info */}
          <div className="ua-info">
            <div className="ua-info-row">
              <span className="ua-icon">📅</span>
              <span className="ua-info-text">October 28th, 2023</span>
            </div>
            <div className="ua-info-row">
              <span className="ua-icon">⏰</span>
              <span className="ua-info-text">11:30 - 12:00 (30min)</span>
            </div>
            <div className="ua-info-row">
              <span className="ua-icon">📍</span>
              <span className="ua-info-text">
                Medicare Hospital, 18 Iwaya Rd, Lagos
              </span>
            </div>
          </div>
        </div>

        <div className="ua-divider" />

        {/* Actions */}
        <div className="ua-actions">
          <button className="ua-btn-outline">Reschedule</button>
          <button className="ua-btn-primary">
            WhatsApp Confirm appointment
          </button>
        </div>
      </div>

      {/* Slider dots */}
      <div className="ua-dots">
        <span className="active" />
        <span />
        <span />
      </div>
    </div>
  );
};

export default Upcoming;
