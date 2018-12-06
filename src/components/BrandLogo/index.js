import React from "react";
import PropTypes from "prop-types";

import BrandLogoStyle from "./BrandLogo.module.scss";

const BrandLogo = React.memo(props => {
  return (
    <div {...props}>
      <h1 className={BrandLogoStyle["logo-font"]}>
        <a href={"/"}>{props.name}</a>
      </h1>
    </div>
  );
});

BrandLogo.propTypes = {
  name: PropTypes.string.isRequired
};

export default BrandLogo;
