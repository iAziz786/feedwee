import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';
import Header from '../Header';
import Loading from '../Loading';

import AppStyle from './App.module.scss';
import index from '../../assets/scss/index.module.scss';
import Explore from '../Explore';
import Notifications from '../Notifications';
import Messages from '../Messages';

const TweetModal = Loadable.Map({
  loader: {
    TweetModal: () => import('../TweetModal')
  },
  render(loaded, props) {
    const TweetModal = loaded.TweetModal.default;
    return <TweetModal {...props} />;
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

  componentDidUpdate(prevProp, prevState) {
    const { location } = prevProp;
    if (
      this.props.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    return (
      <div
        className={index.theme}
        onClick={this.handleOnClick}
        {...this.props}
        style={{ height: '100%' }}
      >
        <Header
          showDropdown={this.state.showDropdown}
          toggleDropdown={this.toggleDropdown}
        />
        <div className={AppStyle.App}>
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path={'/'} component={MainBody} />
            <Route path={'/explore'} component={Explore} />
            <Route path={'/notifications'} component={Notifications} />
            <Route path={'/messages'} component={Messages} />
            <Route path={'/:userId/status/:feedId'} component={TweetModal} />
            <Route path={'/:username'} component={Profile} />
          </Switch>
          {isModal && (
            <Route path={'/:userId/status/:feedId'} component={TweetModal} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
