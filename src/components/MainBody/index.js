import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ExpandTweet from "../ExpandTweet";
import MainStyle from "./MainBody.module.scss";
import "../../assets/scss/ProfileCard.scss";

import ProfileSummary from "../ProfileSummary";
import Posts from "../Posts";
import Suggestions from "../Suggestions";

const MainBody = React.memo(function MainBody(props) {
  return (
    <div className={`${MainStyle.Main} container-fluid d-flex`}>
      <Router>
        <>
          <Route exact={"/expand"} component={ExpandTweet} />
          <ProfileSummary />
          <Posts />
          <Suggestions />
        </>
      </Router>
    </div>
  );
});

export default MainBody;
