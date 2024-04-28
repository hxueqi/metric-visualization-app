import React from 'react';
import './App.css';
import Graph from './components/Graph';
import logo from './assets/logo.webp';

function App() {
  return (
    <div className="App">
      <div className='header'>
      <img src={logo} alt="Logo" className="logo" />
        <h1 className='title'>Factorial metrics</h1>
      </div>
      <Graph />
    </div>
  );
}

export default App;