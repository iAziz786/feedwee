import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Card } from 'react-hover-card';
import Feed from '../Feed';

import TweetModalStyle from './TweetModal.module.scss';

class TweetModal extends React.PureComponent {
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
      <div className={`${TweetModalStyle.Expand}`} onClick={goBack}>
        <div className={`${TweetModalStyle['close-button']}`}>
          <FaTimes
            onClick={e => {
              e.stopPropagation();
              goBack();
            }}
            size={27}
          />
        </div>
        <div className={`${TweetModalStyle['float-content']}`}>
          <p>This is cool: {feedId}</p>
        </div>
      </div>
    );
  }
}

export default TweetModal;
