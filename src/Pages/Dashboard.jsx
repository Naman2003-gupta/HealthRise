import React, { useState } from "react";
import "../App.css";

import Sidebar from "../Components/Sidebar.jsx";
import Topbar from "../Components/Topbar.jsx";
import Welcome from "../Components/Welcome.jsx";
import Upcoming from "../Components/Upcoming.jsx";
import Tracker from "../Components/Tracker.jsx";
import BloodGulucose from "../Components/BloodGulucose.jsx";
import BloodPressure from "../Components/BloodPressure.jsx";
import Cholesterol from "../Components/Cholesterol.jsx";
import Calendar from "../Components/Calender.jsx";
import ActivityGrowth from "../Components/ActivityGrowth.jsx";
import RecentConsultation from "../Components/RecentConsultations.jsx";
import QuickActions from "../Components/QuickActions.jsx";

function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="dashboard">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="main">
        <Topbar />  
        {/* DASHBOARD */}
        {activePage === "dashboard" && (
          <>
            <Welcome />
            <div className="main2">
              <div>
                <Upcoming />
                <div className="main3">
                  <BloodGulucose />
                  <BloodPressure />
                  <Cholesterol />
                </div>
                <ActivityGrowth />
                <RecentConsultation />
              </div>
              <div>
                <Tracker />
                <Calendar />
                <QuickActions />
              </div>
            </div>
          </>
        )}

        {/* OTHER PAGES */}
        {activePage === "appointments" && <Upcoming />}
        {activePage === "history" && <RecentConsultation />}
        {activePage === "analytics" && <ActivityGrowth />}
      </main>
    </div>
  );
}

export default Dashboard;
