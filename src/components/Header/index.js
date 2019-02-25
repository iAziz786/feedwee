import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FiHome, FiBell, FiMail, FiSearch } from 'react-icons/fi';

import {
  MainWrapper,
  FixWrapper,
  ResponsiveItems,
  Navbar,
  Dropdown
} from './style';

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
      <MainWrapper>
        <FixWrapper>
          <ResponsiveItems>
            <Navbar>
              <Link to="/">
                <FiHome className={HeaderStyle['icon-style']} />
              </Link>
              <Link to="/explore">
                <FiSearch className={HeaderStyle['icon-style']} />
              </Link>
              <Link to="/notifications">
                <FiBell className={HeaderStyle['icon-style']} />
              </Link>
              <Link to="/messages">
                <FiMail className={HeaderStyle['icon-style']} />
              </Link>
            </Navbar>
            <Dropdown>
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
            </Dropdown>
          </ResponsiveItems>
        </FixWrapper>
      </MainWrapper>
    );
  }
}

export default Header;
