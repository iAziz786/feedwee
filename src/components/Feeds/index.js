import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Feed from '../Feed';
import Loading from '../Loading';

const Feeds = props => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios.get('/api/tweets').then(res => {
      setFeeds([...feeds, ...res.data.tweets]);
    });
  }, []);

  if (!feeds.length) {
    return <Loading />;
  }
  return feeds.map(feed => (
    <Link
      key={feed._id}
      to={{
        pathname: `/${feed.creator.username}/status/${feed._id}`,
        // This is a trick!
        state: { modal: true, feed }
      }}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Feed key={feed._id} feed={feed} />
    </Link>
  ));
};

export default Feeds;
