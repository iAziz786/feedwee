import React from 'react';
import Header from './Header';
import MainBody from './MainBody';

const App = React.memo(function App(props) {
  return (
    <React.Fragment>
      <Header />
      <MainBody />
    </React.Fragment>
  )
});

export default App;
