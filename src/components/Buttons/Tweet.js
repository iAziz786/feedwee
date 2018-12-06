import React from "react";

import ButtonStyle from "./Button.module.scss";

const Tweet = React.memo(function Tweet({ className, ...props }) {
  return (
    <button
      href={"/"}
      className={`${ButtonStyle.Tweet} ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
});

export default Tweet;
