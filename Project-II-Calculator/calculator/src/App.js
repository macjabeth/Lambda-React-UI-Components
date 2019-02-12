import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import CalculatorControls from './components/DisplayComponents/CalculatorControls';

import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <CalculatorDisplay text={0} />
      <CalculatorControls />
    </div>
  );
};

export default App;
