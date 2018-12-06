import React, { useState } from 'react';
import { FiMessageCircle, FiHeart, FiRepeat } from 'react-icons/fi';

import text from '../../assets/scss/_text.module.scss';

const TweetFooter = React.memo(function TweetFooter(props) {
  const [heartSelected, setHeartState] = useState(false);
  return (
    <div className={`d-flex justify-content-around ${text.small}`}>
      <FiMessageCircle size={18} />
      <FiRepeat size={18} />
      <FiHeart
        onClick={() => setHeartState(!heartSelected)}
        size={18}
        {...heartSelected && { fill: '#e0245e', stroke: '#e0245e' }}
      />
    </div>
  );
});

export default TweetFooter;
