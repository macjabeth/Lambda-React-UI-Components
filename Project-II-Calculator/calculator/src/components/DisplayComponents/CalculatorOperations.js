import React from 'react';
import NumberButton from '../ButtonComponents/NumberButton';
import './Display.css';

const CalculatorOperations = (props) => (
  <div className='calculator-operations'>
    <NumberButton buttonStyle='divide operator' text='&divide;' />
    <NumberButton buttonStyle='multiply operator' text='&times;' />
    <NumberButton buttonStyle='minus operator' text='&ndash;' />
    <NumberButton buttonStyle='plus operator' text='+' />
    <NumberButton buttonStyle='equals operator' text='=' />
  </div>
)

export default CalculatorOperations;
