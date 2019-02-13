import React from 'react';
import CalculatorNumpad from './CalculatorNumpad';
import CalculatorOperations from './CalculatorOperations';
import './Display.css';

const CalculatorControls = (props) => (
  <div className='calculator-controls'>
    <CalculatorNumpad updateTotal={props.updateTotal} />
    <CalculatorOperations updateTotal={props.updateTotal} />
  </div>
)

export default CalculatorControls;
