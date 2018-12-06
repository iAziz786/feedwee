import React from "react";

import Feed from "../Feed";

import ExpandTweetStyle from "./ExpandTweet.module.scss";

class ExpandTweet extends React.PureComponent {
  render() {
    return (
      <div className={`${ExpandTweetStyle.Expand}`}>
        <div className={`${ExpandTweetStyle["float-content"]}`}>
          <Feed
            feed={[
              {
                id: "sdifoasf",
                content: "Some aghsdgContent",
                author: "someone"
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default ExpandTweet;
