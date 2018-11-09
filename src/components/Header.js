import React, { Component } from 'react';

import BrandLogo from './BrandLogo';

import '../assets/scss/Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className={'d-flex navbar-width'}>
          <BrandLogo name={() => <p>
              FeedWee
            </p>}
          />
          <div className='d-flex header-options'>
            <p>Options</p>
            <p>Options</p>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
