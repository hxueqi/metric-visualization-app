const express = require('express');
const router = express.Router();
const { createMetric, getMetricsByGroup } = require('../services/metricsService');

// POST /api/metrics - Create a new metric
router.post('/', async (req, res) => {
  const { name, value, timestamp } = req.body;

  try {
    const metric = await createMetric(name, value, timestamp);
    res.json(metric);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/metrics/:groupBy - Get metrics grouped by specified unit
router.get('/:groupBy', async (req, res) => {
  const groupBy = req.params.groupBy;

  try {
    const metrics = await getMetricsByGroup(groupBy);
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
