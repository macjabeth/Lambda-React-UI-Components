import React from 'react';
import CalculatorNumpad from './CalculatorNumpad';
import CalculatorOperations from './CalculatorOperations';
import './Display.css';

const CalculatorControls = (props) => (
  <div className='calculator-controls'>
    <CalculatorNumpad />
    <CalculatorOperations />
  </div>
)

export default CalculatorControls;
