import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';
import Header from '../Header';
import Loading from '../Loading';

import AppStyle from './App.module.scss';
import index from '../../assets/scss/index.module.scss';
import Explore from '../Explore';
import Notifications from '../Notifications';
import Messages from '../Messages';
import Avatar from '../Avatar';

const Status = Loadable.Map({
  loader: {
    Status: () => import('../Status')
  },
  render(loaded, props) {
    const Status = loaded.Status.default;
    return <Status {...props} />;
  },
  loading: Loading
});

const Profile = Loadable({
  loader: () => import('../Profile'),
  loading: Loading
});

const MainBody = Loadable({
  loader: () => import('../MainBody'),
  loading: Loading
});

class App extends React.PureComponent {
  state = {
    showDropdown: false
  };

  previousLocation = this.props.location;

  componentDidUpdate(prevProp) {
    let { location } = prevProp;
    if (
      this.props.history.action !== 'POP' &&
      (!location.state || !location.state.showModal)
    ) {
      this.previousLocation = location;
    }
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown
    }));
  };

  handleOnClick = () => {
    if (this.state.showDropdown) {
      this.toggleDropdown();
    }
  };

  render() {
    const { location } = this.props;
    const showModal = !!(
      location.state &&
      location.state.showModal &&
      this.previousLocation !== location
    );
    const modalFor = location.state && location.state.modalFor;
    return (
      <div
        className={index.theme}
        onClick={this.handleOnClick}
        {...this.props}
        style={{ minHeight: '100%' }}
      >
        <Header
          showDropdown={this.state.showDropdown}
          toggleDropdown={this.toggleDropdown}
        />
        <div className={`container ${AppStyle.App}`}>
          <Switch location={showModal ? this.previousLocation : location}>
            <Route exact path={'/'} component={MainBody} />
            <Route path={'/explore'} component={Explore} />
            <Route path={'/notifications'} component={Notifications} />
            <Route path={'/messages'} component={Messages} />
            <Route path={'/:userId/status/:feedId'} component={Status} />
            <Route path={'/:username/photo'} component={Avatar} />
            <Route exact path={'/:username'} component={Profile} />
          </Switch>
          {showModal && modalFor === 'avatar' ? (
            <Route exact path={'/:username/photo'} component={Avatar} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
