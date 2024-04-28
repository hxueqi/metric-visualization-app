const metricModel = require('../models/metricModel');

async function createMetric(req, res) {
  const { name, value, timestamp } = req.body;

  try {
    const metric = await metricModel.createMetric(name, value, timestamp);
    res.json(metric);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createMetric };
