import React from 'react';
import NumberButton from '../ButtonComponents/NumberButton';
import './Display.css';

const CalculatorNumbers = (props) => (
  <div className='calculator-numbers'>
    <NumberButton buttonStyle='number one' text='1' />
    <NumberButton buttonStyle='number two' text='2' />
    <NumberButton buttonStyle='number three' text='3' />
    <NumberButton buttonStyle='number four' text='4' />
    <NumberButton buttonStyle='number five' text='5' />
    <NumberButton buttonStyle='number six' text='6' />
    <NumberButton buttonStyle='number seven' text='7' />
    <NumberButton buttonStyle='number eight' text='8' />
    <NumberButton buttonStyle='number nine' text='9' />
  </div>
)

export default CalculatorNumbers;
