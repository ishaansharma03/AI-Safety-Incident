import React, { useState } from 'react';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import './App.css';

function App() {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: "Biased Recommendation Algorithm",
      description: "Algorithm consistently favored certain demographics...",
      severity: "Medium",
      reported_at: "2025-03-15T10:00:00Z"
    },
    {
      id: 2,
      title: "LLM Hallucination in Critical Info",
      description: "LLM provided incorrect safety procedure information...",
      severity: "High",
      reported_at: "2025-04-01T14:30:00Z"
    },
    {
      id: 3,
      title: "Minor Data Leak via Chatbot",
      description: "Chatbot inadvertently exposed non-sensitive user metadata...",
      severity: "Low",
      reported_at: "2025-03-20T09:15:00Z"
    }
  ]);

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-content">
          <span className="logo">🤖</span>
          <h2>AI Safety Dashboard</h2>
        </div>
      </div>

      {/* Main container */}
      <div className="container">
        <div className="card">
          <IncidentForm incidents={incidents} setIncidents={setIncidents} />
        </div>

        <div className="card">
          <IncidentList incidents={incidents} />
        </div>
      </div>
    </>
  );
}

export default App;

