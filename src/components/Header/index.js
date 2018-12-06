import React, { PureComponent } from 'react';
import axios from 'axios';

import BrandLogo from '../BrandLogo';
import BurgerIcon from '../BurgerIcon';
import Dropdown from '../Dropdown';

import HeaderStyle from './Header.module.scss';

class Header extends PureComponent {
  state = {
    isLoggedIn: false,
    user: null
  };

  componentDidMount() {
    axios.get('/profile').then(res => {
      this.setState(() => ({
        isLoggedIn: res.data.loggedIn,
        user: res.data.user
      }));
    });
  }

  render() {
    return (
      <div className={HeaderStyle.Header}>
        <nav className={'d-flex justify-content-between align-items-center'}>
          <div className={`d-flex ${HeaderStyle['header-options']}`}>
            <p>Home</p>
            <p>Moments</p>
          </div>
          <BrandLogo name={'FeedWee'} />
          <div style={{ position: 'relative' }}>
            <BurgerIcon
              className={'d-sm-block d-md-none'}
              onClick={this.props.toggleDropdown}
            />
            {/* <Dropdown show={this.props.showDropdown} /> */}
            <div
              className={`d-flex ${HeaderStyle['header-options']}`}
              onClick={this.props.toggleDropdown}
            >
              {this.state.isLoggedIn ? (
                <a href="/logout">Logout</a>
              ) : (
                <a href="/oauth/authorize">Login</a>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
