import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Loading from '../Loading';

import AppStyle from './App.module.scss';
import index from '../../assets/scss/index.module.scss';
import Explore from '../Explore';
import Notifications from '../Notifications';
import Messages from '../Messages';
import Avatar from '../Avatar';

const Status = React.lazy(() => import('../Status'));
const Profile = React.lazy(() => import('../Profile'));
const MainBody = React.lazy(() => import('../MainBody'));

function App(props) {
  const [previousLocation, setLocation] = useState(props.location);
  const [showModal, setModal] = useState(
    !!(props.location && props.location.state && props.location.state.showModal)
  );
  const { location } = props;
  const modalFor = location.state && location.state.modalFor;

  useEffect(() => {
    if (
      !!(
        props.location &&
        props.location.state &&
        props.location.state.showModal
      )
    ) {
      setModal(true);
    }
  });

  useEffect(() => {
    if (
      props.history.action !== 'POP' &&
      (!location.state || !location.state.showModal)
    ) {
      setLocation(location);
    }
  });

  return (
    <div className={index.theme} {...props} style={{ minHeight: '100%' }}>
      <Header showDropdown={false} />
      <div className={`container ${AppStyle.App}`}>
        <React.Suspense fallback={<Loading />}>
          <Switch location={showModal ? previousLocation : location}>
            <Route exact path={'/'} component={MainBody} />
            <Route path={'/explore'} component={Explore} />
            <Route path={'/notifications'} component={Notifications} />
            <Route path={'/messages'} component={Messages} />
            <Route path={'/:userId/status/:feedId'} component={Status} />
            <Route path={'/:username/photo'} component={Avatar} />
            <Route exact path={'/:username'} component={Profile} />
          </Switch>
          {showModal && modalFor === 'avatar' && (
            <Route exact path={'/:username/photo'} component={Avatar} />
          )}
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
