import React from 'react';

import ProfileSummary from '../ProfileSummary';
import Posts from '../Posts';
import Suggestions from '../Suggestions';

import MainStyle from './MainBody.module.scss';
import '../../assets/scss/ProfileCard.scss';

const MainBody = React.memo(function MainBody(props) {
  return (
    <div className={`${MainStyle.Main} container-fluid d-flex`}>
      <ProfileSummary />
      <Posts />
      <Suggestions />
    </div>
  );
});

export default MainBody;
