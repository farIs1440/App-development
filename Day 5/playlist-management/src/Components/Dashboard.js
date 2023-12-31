import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import { logoutUser } from '../Redux/authAction';
import '../styles/dashboard.css'; // Import your dashboard CSS for styling
import Navbar from './Navbar';

function Dashboard() {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user); // Get user data from Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    
    dispatch(logoutUser());
    
    navigate('/');
  };

  return (
    <>    
    <Navbar/>
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">PULSE-PLAY</div>
        <ul>
          <li><a href="/profilemain">Profile</a></li>
          <li><a href="/profile">Home</a></li>
          <li><a href="/academic">Search</a></li>
          <li><a href="/application">Your Library</a></li>
          <li><a href="/applications">Recently Played</a></li>
          <li><a href="/set">Settings</a></li>
        </ul>
      </div>
      <div className="content">
        <header>
          <div className="top-nav">
            <div className="welcome">Welcome, {user.email}</div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </header>
        <main>
          {/* Your dashboard content goes here */}
          <h1>Tune in,Tune out,Playlist On!</h1>
          <p>This is where you can manage your Songs and Playlist.</p>
        </main>
      </div>
    </div>
    </>

  );
}

export default Dashboard;
