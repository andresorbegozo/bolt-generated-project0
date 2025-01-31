import React from 'react';
import './AnimatedCanadianFlag.css';

export default function AnimatedCanadianFlag() {
  return (
    <div className="flag-container">
      <div className="flag">
        <div className="flag-red-left"></div>
        <div className="flag-white">
          <div className="flag-maple-leaf"></div>
        </div>
        <div className="flag-red-right"></div>
      </div>
    </div>
  );
}
