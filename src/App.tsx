import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </Router>
  );
}
