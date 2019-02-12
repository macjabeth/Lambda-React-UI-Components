import React from 'react';
import CardBanner from './CardBanner';
import CardContent from'./CardContent';
import './Card.css';

const CardContainer = () => {
  return (
    <div className="card">
      <div className="card-container">
        <a href="https://www.reactjs.org" target="_blank">
          <CardBanner />
        </a>
        <CardContent />
      </div>
    </div>
  )
}

export default CardContainer;
