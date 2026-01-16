import React from 'react'
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

          <div>
            <h3>My Pregnancy Tracker</h3>
            <p className="date">27 October, 2023</p>
          </div>
        </div>

        <div className="header-right">
          <span className="status">IN PROGRESS</span>
          <button className="edit-btn">
            <Edit2 size={14} />
            Edit
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="pregnancy-details">
        <div className="detail-item">
          <Calendar size={16} />
          <div>
            <span>Expected Delivery Date</span>
            <p>October 28th, 2023</p>
          </div>
        </div>

        <div className="detail-item">
          <Calendar size={16} />
          <div>
            <span>ANC Day</span>
            <p>Tuesday</p>
          </div>
        </div>

        <div className="detail-item">
          <MapPin size={16} />
          <div>
            <span>Hospital</span>
            <p>Medicare Hospital, 18 Iwaya Rd, Lagos</p>
          </div>
        </div>
      </div>

      {/* Action */}
      <button className="reminder-btn">
        <MessageCircle size={18} />
        Send Reminder
      </button>
    </div>
  );
};

export default Tracker
