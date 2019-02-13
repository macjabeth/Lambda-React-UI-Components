import React from 'react';
import ActionButton from '../ButtonComponents/ActionButton';
import CalculatorNumbers from './CalculatorNumbers';
import './Display.css';

const CalculatorNumpad = (props) => (
  <div className='calculator-numpad'>
    <ActionButton buttonStyle='calculator-clear number' text='clear' updateTotal={props.updateTotal} />
    <CalculatorNumbers updateTotal={props.updateTotal} />
    <ActionButton buttonStyle='calculator-zero number' text='0' updateTotal={props.updateTotal} />
  </div>
)

export default CalculatorNumpad;
