const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'metrics',
  password: 'mysecretpassword',
  port: 5432,
});

module.exports = pool;
