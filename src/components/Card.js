import React from 'react';

import '../assets/scss/Card.scss';

const Card = function Card({ className, ...props }) {
  return (
    <div
      className={`Card ${props.className}`}
      {...props}
    >
      {props.children}
    </div>
  )
};

export default Card; 
