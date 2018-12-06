import React from "react";
import Header from "./Header";
import MainBody from "./MainBody";

import index from "../assets/scss/index.module.scss";

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
      <div className={index.theme} onClick={this.handleOnClick} {...this.props}>
        <Header
          showDropdown={this.state.showDropdown}
          toggleDropdown={this.toggleDropdown}
        />
        <MainBody />
      </div>
    );
  }
}

export default App;
