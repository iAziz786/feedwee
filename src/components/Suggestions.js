import React from 'react';

import Card from './Card';

function Suggestions(props) {
  return (
    <div
      className={'d-none d-lg-block flex-fill col-3  mx-1 border-orange Aside'}
    >
      <Card>No suggested people to follow</Card>
    </div>
  );
}

export default Suggestions;
