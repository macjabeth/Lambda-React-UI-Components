import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => (
  <div className='calculator-display'>
    <span>{props.text}</span>
  </div>
)

export default CalculatorDisplay;
