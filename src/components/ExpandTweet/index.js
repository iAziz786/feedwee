import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Card } from 'react-hover-card';
import Feed from '../Feed';

import ExpandTweetStyle from './ExpandTweet.module.scss';

class ExpandTweet extends React.PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', event => {
      if (event.keyCode === 27) {
        this.props.history.goBack();
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', () => {});
  }
  render() {
    const {
      match: {
        params: { feedId }
      },
      history: { goBack }
    } = this.props;
    return (
      <div className={`${ExpandTweetStyle.Expand}`} onClick={goBack}>
        <div className={`${ExpandTweetStyle['close-button']}`}>
          <FaTimes
            onClick={e => {
              e.stopPropagation();
              goBack();
            }}
            size={27}
          />
        </div>
        <div className={`${ExpandTweetStyle['float-content']}`}>
          <p>This is cool: {feedId}</p>
        </div>
      </div>
    );
  }
}

export default ExpandTweet;
