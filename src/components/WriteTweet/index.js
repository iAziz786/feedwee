import React, { PureComponent } from 'react';
import axios from 'axios';
import ContentEditable from 'react-sane-contenteditable';

import Tweet from '../Buttons/Tweet';

import WriteTweetStyle from './WriteTweet.module.scss';

class WriteTweet extends React.Component {
  state = {
    tweetBody: ''
  };
  updateTweetBody = (event, value) => {
    this.setState(() => ({
      tweetBody: value
    }));
  };
  tweetPost = async () => {
    try {
      await axios
        .post('/api/tweet/new', {
          tweetBody: this.state.tweetBody
        })
        .then(({ data }) => {
          this.props.updateFeeds([data.tweet, ...this.props.feeds]);
        });
    } catch (err) {
      console.log(err);
    }
    this.setState(
      () => ({
        tweetBody: ''
      }),
      this.forceUpdate
    );
    // this.forceUpdate(() => console.log('called forceupdate'));
  };
  render() {
    return (
      <div className={`${WriteTweetStyle.WriteTweet} py-2 px-3`}>
        <ContentEditable
          className={`${WriteTweetStyle['text-area']}`}
          placeholder={'Write your tweet'}
          onChange={this.updateTweetBody}
          multiLine
        />
        <div className={'d-flex'}>
          <div />
          <Tweet className={'ml-auto'} onClick={this.tweetPost}>
            Tweet
          </Tweet>
        </div>
      </div>
    );
  }
}

export default WriteTweet;
