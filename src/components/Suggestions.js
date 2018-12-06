import React from 'react';

import Card from './Card';

const Suggestions = React.memo(function Suggestions(props) {
  return (
    <div
      className={'d-none d-lg-block flex-fill col-3  mx-1 border-orange Aside'}
    >
      <Card>
        Right Sidebar
      </Card>
    </div>
  )
});

export default Suggestions;
