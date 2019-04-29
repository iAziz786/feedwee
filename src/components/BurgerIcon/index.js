import React from 'react';

import BurgerStyle from './BurgerIcon.module.scss';

function BurgerIcon(props) {
  return (
    <div {...props}>
      <div className={`${BurgerStyle.line} my-2`} />
      <div className={`${BurgerStyle.line} my-2`} />
      <div className={`${BurgerStyle.line} my-2`} />
    </div>
  );
}

export default BurgerIcon;
