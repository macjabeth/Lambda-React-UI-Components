import React from 'react';
import './Button.css';

const ActionButton = (props) => (
  <button className={props.buttonStyle} onClick={() => props.updateTotal(props.text)}>
    {props.text}
  </button>
)

export default ActionButton;
