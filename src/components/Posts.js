import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import WriteTweet from './WriteTweet';
import TweetModal from './TweetModal';
import Loading from './Loading';

const Feeds = Loadable.Map({
  loader: {
    Feed: () => import('./Feed'),
    feeds: () => axios.get('/api/tweets').then(res => res.data.tweets)
  },
  render(loaded, props) {
    let Feed = loaded.Feed.default;
    let feeds = loaded.feeds;
    return feeds.map(feed => (
      <Link
        key={feed._id}
        to={{
          pathname: `/${feed.creator.username}/status/${feed._id}`,
          // This is a treak!
          state: { modal: true }
        }}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Feed key={feed._id} feed={feed} />
      </Link>
    ));
  },
  loading: Loading
});

class Posts extends React.PureComponent {
  render() {
    return (
      <div className={'flex-fill col-12 col-md-8 p-0 Feeds'}>
        <WriteTweet />
        <Feeds />
      </div>
    );
  }
}

Posts.feeds = PropTypes.array;

export default Posts;
