import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './Welcome'; // Import the Welcome component
import Home from './Home'; // Import the Home component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Welcome />} />
        <Route path="/home" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
