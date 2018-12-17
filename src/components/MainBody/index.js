import React from 'react';
import axios from 'axios';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainStyle from './MainBody.module.scss';
import '../../assets/scss/ProfileCard.scss';

import ProfileSummary from '../ProfileSummary';
import Posts from '../Posts';
import Suggestions from '../Suggestions';
import Loading from '../Loading';

const ExpandTweet = Loadable.Map({
  loader: {
    ExpandTweet: () => import('../ExpandTweet')
  },
  render(loaded, props) {
    const ExpandTweet = loaded.ExpandTweet.default;
    return <ExpandTweet {...props} />;
  },
  loading: Loading
});

const MainBody = React.memo(function MainBody(props) {
  return (
    <div className={`${MainStyle.Main} container-fluid d-flex`}>
      <Router>
        <React.Fragment>
          <Route
            exact
            path={'/:userId/status/:feedId'}
            component={ExpandTweet}
          />
          <ProfileSummary />
          <Posts />
          <Suggestions />
        </React.Fragment>
      </Router>
    </div>
  );
});

export default MainBody;
