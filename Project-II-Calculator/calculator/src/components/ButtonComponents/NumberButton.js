import React from 'react';
import './Button.css';

const NumberButton = (props) => (
  <button className={props.buttonStyle} onClick={() => props.updateTotal(props.text)}>
    {props.text}
  </button>
)

export default NumberButton;
