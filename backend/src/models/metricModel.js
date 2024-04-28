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

module.exports = { createMetric };
