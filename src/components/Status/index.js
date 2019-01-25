import React from 'react';
import Feed from '../Feed';

function Status(props) {
  const {
    location: {
      state: { feed }
    }
  } = props;
  return (
    <>
      <Feed feed={feed} />
    </>
  );
}

export default Status;
