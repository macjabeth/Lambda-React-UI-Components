import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => (
  <button className='calculator-display'>
    {props.text}
  </button>
)

export default CalculatorDisplay;
