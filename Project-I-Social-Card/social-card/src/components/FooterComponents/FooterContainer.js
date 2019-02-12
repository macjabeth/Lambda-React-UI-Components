import React from 'react';
import SocialLink from '../SocialLink/SocialLink';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className='footer'>
      <SocialLink className='far fa-comment' id='comment-count' />
      <SocialLink className='fas fa-sync-alt' id='share-count' />
      <SocialLink className='far fa-heart' id='heart-count' />
      <SocialLink className='far fa-envelope' id='mail-count' />
    </div>
  )
}

export default Footer;
