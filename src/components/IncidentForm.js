import React, { useState } from 'react';

function IncidentForm({ incidents, setIncidents }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    const newIncident = {
      id: incidents.length + 1,
      title,
      description,
      severity,
      reported_at: new Date().toISOString()
    };

    setIncidents([newIncident, ...incidents]);
    setTitle('');
    setDescription('');
    setSeverity('Low');
  };

  return (
    <form onSubmit={handleSubmit} className="incident-form">
      <h2>Report New Incident</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
      />

      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default IncidentForm;

