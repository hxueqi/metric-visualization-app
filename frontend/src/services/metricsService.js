import axios from 'axios';

const metricsService = {
  fetchMetrics: async () => {
    try {
      return await axios.get('http://localhost:3001/api/metrics');
    } catch (error) {
      throw error;
    }
  },
};

export default metricsService;
