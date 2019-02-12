import React from 'react';
import CardBanner from './CardBanner';
import CardContent from'./CardContent';
import './Card.css';

const CardContainer = () => {
  return (
    <div className="card-container">
      <a href="https://www.reactjs.org">
        <CardBanner />
      </a>
      <CardContent />
    </div>
  )
}

export default CardContainer;
