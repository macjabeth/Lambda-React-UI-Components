import React from 'react';

function SocialLink(props) {
  let count = 0;
  const handleClick = () => {
    count++;
    document.getElementById(props.id).textContent = count;
  }

  return (
    <a onClick={handleClick}>
      <i className={props.className}></i>
      <span id={props.id}>{count}</span>
    </a>
  )
}

export default SocialLink;
