import React, { useState } from 'react';

function IncidentItem({ incident }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="incident-item" style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '5px' }}>
      <h3>{incident.title}</h3>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Reported Date:</strong> {new Date(incident.reported_at).toLocaleDateString()}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>

      {showDetails && (
        <div style={{ marginTop: '10px' }}>
          <p><strong>Description:</strong> {incident.description}</p>
        </div>
      )}
    </div>
  );
}

export default IncidentItem;
