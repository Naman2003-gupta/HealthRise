import React from "react";
import { Calendar, MapPin, Edit2, Baby, MessageCircle } from "lucide-react";
import "./Tracker.css";

const Tracker = () => {
  return (
    <div className="pregnancy-card">
      {/* Header */}
      <div className="pregnancy-header">
        <div className="header-left">
          <div className="icon-circle">
            <Baby size={18} />
          </div>

          <div className="header-text">
            <h3>My Pregnancy Tracker</h3>
            <p className="date">27 October, 2023</p>
          </div>
        </div>

        <div className="header-right">
          <span className="status">IN PROGRESS</span>
          <button className="edit-btn">
            <Edit2 size={14} />
            <span className="edit-text">Edit</span>
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="pregnancy-details">
        <div className="detail-item">
          <div className="detail-icon">
            <Calendar size={16} />
          </div>
          <div className="detail-content">
            <span className="detail-label">Expected Delivery Date</span>
            <p className="detail-value">October 28th, 2023</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <Calendar size={16} />
          </div>
          <div className="detail-content">
            <span className="detail-label">ANC Day</span>
            <p className="detail-value">Tuesday</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <MapPin size={16} />
          </div>
          <div className="detail-content">
            <span className="detail-label">Hospital</span>
            <p className="detail-value hospital-text">
              Medicare Hospital, 18 Iwaya Rd, Lagos
            </p>
          </div>
        </div>
      </div>

      {/* Action */}
      <button className="reminder-btn">
        <MessageCircle size={18} />
        <span className="reminder-text">Send Reminder</span>
      </button>
    </div>
  );
};

export default Tracker;
