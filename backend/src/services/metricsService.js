const pool = require('../../config/db');

async function createMetric(name, value, timestamp) {
  const query = {
    text: 'INSERT INTO metrics(name, value, timestamp) VALUES($1, $2, $3) RETURNING *',
    values: [name, value, timestamp],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error('Error creating metric');
  }
}

async function getMetricsByGroup(groupBy) {
  let dateFormat;
  switch (groupBy.toUpperCase()) {
    case 'MINUTE':
      dateFormat = 'YYYY-MM-DD HH24:MI';
      break;
    case 'HOUR':
      dateFormat = 'YYYY-MM-DD HH24';
      break;
    case 'DAY':
      dateFormat = 'YYYY-MM-DD';
      break;
    default:
      throw new Error('Invalid groupBy value');
  }

  const query = {
    text: `SELECT TO_CHAR(DATE_TRUNC('${groupBy}', timestamp), $1) AS timestamp, AVG(value) AS value FROM metrics GROUP BY DATE_TRUNC('${groupBy}', timestamp)`,
    values: [dateFormat],
  };

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    throw new Error('Error fetching metrics');
  }
}

module.exports = { createMetric, getMetricsByGroup };