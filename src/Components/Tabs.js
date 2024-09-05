// src/components/Tabs.js
import React, { useState } from 'react';
import './tabs.css';  // Tabs-specific styles

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabs = ["About Me", "Experiences", "Recommended"];

  return (
    <div className="tabs-container shadow-lg">
      <div className="tabs-buttons">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`tab-button ${activeTab === tab ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === "About Me" && (
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been working here for 3 years now...<br></br> <br></br>
            I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
          </p>
        )}
        {activeTab === "Experiences" && <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been working here for 3 years now...<br></br> <br></br>
            I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
          </p>}
        {activeTab === "Recommended" && <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been working here for 3 years now...<br></br> <br></br>
            I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
          </p>}
      </div>

      <div className="tabs-footer-line"></div> {/* Bottom line for the box */}
    </div>
  );
};

export default Tabs;
