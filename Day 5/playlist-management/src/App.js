import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Genre from './Components/Genre';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" component={<Home/> }/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/genre" element={<Genre />} />
                {/* Add other routes as needed */}
      </Routes>
    </Router>
  );  
}

export default App;
