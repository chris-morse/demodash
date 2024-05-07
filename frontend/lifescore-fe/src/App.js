import React from 'react';
import { Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome'; 
import Home from './pages/Home';
import AddressPage from './pages/AddressPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
  );
}

export default App;
