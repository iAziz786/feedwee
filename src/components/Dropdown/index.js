import React from 'react';
import PropTypes from 'prop-types';

import DropdownStyle from './Dropdown.module.scss';

function Dropdown(props) {
  return (
    <div
      className={`${DropdownStyle.Dropdown} ${
        props.show ? 'd-none' : 'd-block'
      } py-2`}
    >
      <div className={'px-3 py-2'}>
        <p>Logout</p>
      </div>
      <div className={'px-3 py-2'}>
        <p>Profile</p>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  show: PropTypes.bool
};

Dropdown.defaultProps = {
  show: true
};

export default Dropdown;
