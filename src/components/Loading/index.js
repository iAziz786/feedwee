import React from 'react';
import MDSpinner from 'react-md-spinner';

import { Wrapper } from './style';

function Loading(props) {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div>
        Taking a long time... <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return (
      <Wrapper>
        <MDSpinner singleColor={'#1da1f2'} />
      </Wrapper>
    );
  } else {
    return null;
  }
}

export default Loading;
