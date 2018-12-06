import React, { PureComponent } from "react";
import ContentEditable from "react-sane-contenteditable";

import Tweet from "../Buttons/Tweet";

import WriteTweetStyle from "./WriteTweet.module.scss";

class WriteTweet extends PureComponent {
  render() {
    return (
      <div className={`${WriteTweetStyle.WriteTweet} py-2 px-3`}>
        <ContentEditable
          className={`${WriteTweetStyle["text-area"]}`}
          placeholder={"Write your tweet"}
          multiLine
        />
        <div
          className={'d-flex'}
        >
          <div></div>
          <Tweet className={'ml-auto'}>Tweet</Tweet>
        </div>
      </div>
    );
  }
}

export default WriteTweet;
