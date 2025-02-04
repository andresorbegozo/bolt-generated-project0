import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductAssemblyCheck from './pages/ProductAssemblyCheck';

export default function App() {
  return (
    <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-assembly-check" element={<ProductAssemblyCheck />} />
          </Routes>
        </div>
    </Router>
  );
}
