import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BrandLogoStyle from './BrandLogo.module.scss';

const BrandLogo = React.memo(props => {
  return (
    <div {...props}>
      <h1 className={BrandLogoStyle['logo-font']}>
        <Link to={'/'}>{props.name}</Link>
      </h1>
    </div>
  );
});

BrandLogo.propTypes = {
  name: PropTypes.string.isRequired
};

export default BrandLogo;
