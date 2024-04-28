const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const metricsRoutes = require('./src/routes/metricRoutes'); 

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.use('/api/metrics', metricsRoutes); 
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

