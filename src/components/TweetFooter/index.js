import React, { useState } from 'react';
import { FiMessageCircle, FiHeart, FiRepeat } from 'react-icons/fi';

import text from '../../assets/scss/_text.module.scss';
import TweetFooterStyle from './TweetFooter.module.scss';

function TweetFooter(props) {
  const [heartSelected, useHeartState] = useState(false);
  return (
    <div className={`d-flex mt-2 justify-content-around ${text.small}`}>
      <FiMessageCircle size={18} stroke={TweetFooterStyle.secondaryColor} />
      <FiRepeat size={18} stroke={TweetFooterStyle.secondaryColor} />
      <FiHeart
        onClick={event => {
          event.stopPropagation();
          useHeartState(!heartSelected);
        }}
        size={18}
        stroke={TweetFooterStyle.secondaryColor}
        {...heartSelected && { fill: '#e0245e', stroke: '#e0245e' }}
      />
    </div>
  );
}

export default TweetFooter;
