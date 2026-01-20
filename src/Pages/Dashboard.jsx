import React, { useState } from "react";
import "../App.css";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

import Welcome from "../Components/Welcome";
import Upcoming from "../Components/Upcoming";
import Tracker from "../Components/Tracker";
import BloodGulucose from "../Components/BloodGulucose";
import BloodPressure from "../Components/BloodPressure";
import Cholesterol from "../Components/Cholesterol";
import Calendar from "../Components/Calender";
import ActivityGrowth from "../Components/ActivityGrowth";
import RecentConsultation from "../Components/RecentConsultations";
import QuickActions from "../Components/QuickActions";
import ConsultDoctor from "../Components/ConsultDoctor";
import Appointments from "../Components/Appointments";
import MedicalHistory from "../Components/MedicalHistory";
import MyHospitals from "../Components/MyHospitals";
import Analytics from "../Components/Analytics";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  // Desktop collapse
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  // Mobile open
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`dashboard ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {sidebarOpen && window.innerWidth <= 1024 && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main
        className={`main ${sidebarOpen && window.innerWidth <= 1024 ? "blur" : ""}`}
      >
        <Topbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />

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

        {activePage === "ConsultDoctor" && <ConsultDoctor />}
        {activePage === "Appointments" && <Appointments />}
        {activePage === "MedicalHistory" && <MedicalHistory />}
        {activePage === "MyHospitals" && <MyHospitals />}
        {activePage === "Analytics" && <Analytics />}
      </main>
    </div>
  );
};

export default Dashboard;
