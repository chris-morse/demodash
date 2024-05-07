import React from 'react';
import {Link } from "react-router-dom";
import '../styles/Welcome.css'; // Import CSS for styling

function Welcome() {

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">LIFE SCORE.</h1>
      <Link to="/home"><button className="get-started-button">Get Started</button></Link>
    </div>
    
  );
}

export default Welcome;