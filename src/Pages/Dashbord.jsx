import React from 'react'
import "../App.css";
import Sidebar from '../Components/Sidebar.jsx'
import Topbar from '../Components/Topbar.jsx'
import Welcome from '../Components/welcome.jsx';
import Upcoming from '../Components/Upcoming.jsx';
import Tracker from '../Components/Tracker.jsx';

function Dashbord() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main">
        <Topbar />
        <Welcome />
        <div className='main2'>
          <Upcoming />
          <Tracker />
        </div>
      </main>
    </div>
  );
}

export default Dashbord
