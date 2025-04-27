import React, { useState } from 'react';
import IncidentItem from './IncidentItem';

function IncidentList({ incidents }) {
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');

  const filteredIncidents = incidents.filter((incident) => {
    if (filter === 'All') return true;
    return incident.severity === filter;
  });

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    if (sortOrder === 'Newest') {
      return new Date(b.reported_at) - new Date(a.reported_at);
    } else {
      return new Date(a.reported_at) - new Date(b.reported_at);
    }
  });

  return (
    <div>
      {/* Filter and Sort */}
      <div className="select-wrapper">
        <div className="select-group">
          <label>Filter by Severity:</label>
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="select-group">
          <label>Sort by Date:</label>
          <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Incident list */}
      {sortedIncidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
}

export default IncidentList;


