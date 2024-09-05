// src/App.js
import React from 'react';
import Layout from './Components/Layout';  // Main layout component
import './app.css';  // App-level styling

function App() {
  return (
    <div className="App">
      <Layout /> {/* The layout contains both the Tabs and Gallery */}
    </div>
  );
}

export default App;
