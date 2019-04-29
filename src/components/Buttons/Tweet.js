import React from 'react';

import ButtonStyle from './Button.module.scss';

function Tweet({ className, ...props }) {
  return (
    <button
      href={'/'}
      className={`${ButtonStyle.Tweet} ${className && className}`}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Tweet;
