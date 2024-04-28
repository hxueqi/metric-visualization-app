import React, { useState } from 'react';
import './MetricGenerator.css';

const MetricGenerator = ({ fetchData }) => {
  const [formData, setFormData] = useState({ name: '', value: '', timestamp: '' });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, value, timestamp } = formData;

    try {
      const response = await fetch('http://localhost:3001/api/metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, value, timestamp }),
      });

      if (!response.ok) {
        throw new Error('Server responded with error: ' + response.status + ' ' + response.statusText);
      }

      // Trigger data reload
      fetchData();
      setFormData({ name: '', value: '', timestamp: '' });
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  return (
    <div className='inputContainer'>
      {error && <div className='inputError'>Please input the information correctly!</div>}
      <div className="newMetric">Your new metric</div>
      <form onSubmit={handleSubmit} className="metric-form">
      <div className='inputgroups'>
        <div className='inputgroup'>
          Name:
          <input className="metric-form-input" type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className='inputgroup'>
          Value:
          <input className="metric-form-input" type="text" name="value" value={formData.value} onChange={handleChange} />
        </div>
        <div className='inputgroup'>
          Timestamp:
          <input className="metric-form-input" type="datetime-local" name="timestamp" value={formData.timestamp} onChange={handleChange} />
        </div>
        </div >
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MetricGenerator;
