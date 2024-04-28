import React, { useState, useEffect } from 'react';
import MetricGenerator from './MetricGenerator';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from 'victory';
import './Graph.css';

const Graph = () => {
  const [data, setData] = useState([]);
  const [groupBy, setGroupBy] = useState('day');

  useEffect(() => {
    requestData(groupBy);
  }, [groupBy]);

  const requestData = (group_by) => {
    fetch(`http://localhost:3001/api/metrics/${group_by}`)
      .then(res => res.json())
      .then(result => {
        setData(result);
      })
      .catch(error => console.error('Error:', error));
  };

  const formatData = (data) => {
    return data.map(datum => ({
      x: isNaN(Date.parse(datum.timestamp)) ? new Date() : new Date(datum.timestamp),
      y: isNaN(parseFloat(datum.value)) ? 0 : parseFloat(datum.value)
    }));
  };

  const renderChart = () => {
    return (
      <VictoryChart domainPadding={20}>
        <VictoryAxis
          tickFormat={(t) => {
            const date = new Date(t);
            return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
          }}
          style={{ tickLabels: { fontSize: 10, padding: 5 } }}
        />
        <VictoryAxis dependentAxis />
        <VictoryBar
          data={formatData(data)}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryTooltip />}
        />
      </VictoryChart>
    );
  };
  return (
    <div className="Graph">
      <div className="viewSelectionGroup">
      <div className="viewSelectionTitle">Show average:</div>
      <button className="viewSelect" onClick={() => setGroupBy("day")}>
        By day
      </button>
      <button className="viewSelect" onClick={() => setGroupBy("hour")}>
        By hour
      </button>
      <button className="viewSelect" onClick={() => setGroupBy("minute")}>
        By minute
      </button>
      </div>
      <div className='bar-graph'>
        {data.length > 0 && renderChart()}
      </div>
      <MetricGenerator fetchData={() => requestData(groupBy)} />
    </div>
  );
};

export default Graph;
