import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <a><i className='far fa-comment'></i></a>
      <a><i className="fas fa-sync-alt"></i> <span>6</span></a>
      <a><i className="far fa-heart"></i> <span>4</span></a>
      <a><i className="far fa-envelope"></i></a>
    </div>
  )
}

export default Footer;
