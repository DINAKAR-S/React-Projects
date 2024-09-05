// src/components/Layout.js
import React from 'react';
import Tabs from './Tabs';    // Tabs widget
import Gallery from './Gallery';  // Gallery widget
import './layout.css';  // Layout-specific styles

const Layout = () => {
  return (
    <div className="layout-container">
      {/* Left Side - Empty */}
      <div className="left-column"></div>

      {/* Right Side - Contains both widgets */}
      <div className="right-column">
        <Tabs />  {/* First Widget: Tabs */}
        <Gallery />  {/* Second Widget: Gallery */}
      </div>
    </div>
  );
};

export default Layout;
