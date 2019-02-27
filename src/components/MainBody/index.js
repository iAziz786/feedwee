import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FeedList from '../FeedList';
import Suggestions from '../Suggestions';
import WriteTweet from '../WriteTweet';

import '../../assets/scss/ProfileCard.scss';

const MainBody = React.memo(function MainBody(props) {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios.get('/api/tweets').then(res => {
      setFeeds([...feeds, ...res.data.tweets]);
    });
  }, []);
  return (
    <div className={'d-flex justify-content-center'}>
      <div className={'col-12 col-md-12 col-lg-7'}>
        <WriteTweet updateFeeds={setFeeds} feeds={feeds} />
        <FeedList feeds={feeds} />
      </div>
      <Suggestions />
    </div>
  );
});

export default MainBody;
