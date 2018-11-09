import React from 'react';
import PropTypes from 'prop-types';

const BrandLogo = React.memo(props => {
  return (
    <div>
      {props.name()}
    </div>
  );
});

BrandLogo.propTypes = {
  name: PropTypes.string.isRequired
};

export default BrandLogo;