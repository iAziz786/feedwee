import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FiHome, FiBell, FiMail, FiSearch } from 'react-icons/fi';

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
      <div className={`d-flex ${HeaderStyle.Header}`}>
        <div className={`d-flex ${HeaderStyle['Header-Inner']}`}>
          <nav
            className={
              'container d-flex justify-content-between align-items-center'
            }
          >
            <div
              className={'row justify-content-between'}
              style={{ width: '100%' }}
            >
              <div className={`d-flex col-4 justify-content-around`}>
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
              </div>
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
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
