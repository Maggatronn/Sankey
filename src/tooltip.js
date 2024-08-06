import React from 'react';
import './tooltip.css';

const Tooltip = ({ left, top, children }) => (
  <div className="tooltip" style={{ left, top }}>
    {children}
  </div>
);

export default Tooltip;