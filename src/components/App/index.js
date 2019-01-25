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
        <div className={`container ${AppStyle.App}`}>
          <Switch>
            <Route exact path={'/'} component={MainBody} />
            <Route path={'/explore'} component={Explore} />
            <Route path={'/notifications'} component={Notifications} />
            <Route path={'/messages'} component={Messages} />
            <Route path={'/:userId/status/:feedId'} component={Status} />
            <Route path={'/:username'} component={Profile} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
