import React from 'react';
import './App.css';
import Paddle from './components/Paddle';
import Ball from './components/Ball';

function App() {
  return (
    <div className="container">
      <Paddle />
      <Ball />
    </div>
  );
}

export default App;
