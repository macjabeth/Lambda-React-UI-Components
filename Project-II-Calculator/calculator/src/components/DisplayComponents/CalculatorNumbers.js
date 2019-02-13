import React from 'react';
import NumberButton from '../ButtonComponents/NumberButton';
import './Display.css';

const CalculatorNumbers = (props) => (
  <div className='calculator-numbers'>
    <NumberButton buttonStyle='number one' text='1' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='number two' text='2' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='number three' text='3' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='number four' text='4' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='number five' text='5' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='number six' text='6' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='number seven' text='7' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='number eight' text='8' updateTotal={props.updateTotal} />
    <NumberButton buttonStyle='number nine' text='9' updateTotal={props.updateTotal} />
  </div>
)

export default CalculatorNumbers;
