import React from 'react';

import Posts from '../Posts';
import Suggestions from '../Suggestions';
import WriteTweet from '../WriteTweet';

import '../../assets/scss/ProfileCard.scss';

const MainBody = React.memo(function MainBody(props) {
  return (
    <div className={'container d-flex justify-content-center'}>
      <div className={'col-12 col-md-7'}>
        <WriteTweet />
        <Posts />
      </div>
      <Suggestions />
    </div>
  );
});

export default MainBody;
