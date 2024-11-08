
import React from 'react';

// Custom Next Arrow
const NextArrow = () => {
  return (
    <div className="custom-arrow next-arrow">
      {/* Add custom styling or SVG here */}
      <span>→</span>
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = () => {
  return (
    <div className="custom-arrow prev-arrow">
      {/* Add custom styling or SVG here */}
      <span>←</span>
    </div>
  );
};

export { NextArrow, PrevArrow };
