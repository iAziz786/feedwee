import React from "react";
import { render } from "react-testing-library";
import ExpandTweet from "../../components/ExpandTweet";

describe("ExpandTweet", () => {
  it("should render the component", () => {
    render(<ExpandTweet />);
  });
});
