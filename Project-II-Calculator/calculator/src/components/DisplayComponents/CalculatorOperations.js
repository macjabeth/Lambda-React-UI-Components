import React from 'react';
import NumberButton from '../ButtonComponents/NumberButton';
import './Display.css';

const CalculatorOperations = (props) => (
  <div className='calculator-operations'>
    <NumberButton buttonStyle='divide operator' text='&divide;' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='multiply operator' text='&times;' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='minus operator' text='&ndash;' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='plus operator' text='+' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='equals operator' text='=' updateTotal={props.updateTotal} />
  </div>
)

export default CalculatorOperations;
