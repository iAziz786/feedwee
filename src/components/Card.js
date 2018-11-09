import React from 'react';

import '../assets/scss/Card.scss';

const Card = React.memo(function Card({ children, ...props }) {
  return (
    <div className={`Card ${props.className}`}>
      {children}
    </div>
  )
});

export default Card;
