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
import ConsultDoctor from "../Components/ConsultDoctor.jsx";
import Appointments from "../Components/Appointments.jsx";
import MedicalHistory from "../Components/MedicalHistory.jsx";
import MyHospitals from "../Components/MyHospitals.jsx";
import Analytics from "../Components/Analytics.jsx";
function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className={`main ${sidebarOpen ? "" : "collapsed"}`}>
        <Topbar />

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
}

export default Dashboard;
