import React, { Component } from "react";
import { handleOnMouseLeave } from "../util/util";
import { handleOnMouseEnter } from "../util/util";

class HoverComponent extends Component {
  state = {
    hover: false,
  };

  renderStyle() {
    return this.state.hover
      ? {
          ...styles.container,
          color: this.props.hoverColor,
          background: this.props.hoverBgColor,
        }
      : {
          ...styles.container,
          color: this.props.noHoverColor,
          background: this.props.noHoverBgColor,
        };
  }

  render() {
    return (
      <div
        onMouseEnter={() => handleOnMouseEnter(this)}
        onMouseLeave={() => handleOnMouseLeave(this)}
        style={this.renderStyle()}
      >
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  container: {
    cursor: "pointer",
    padding: "0px",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
};

export default HoverComponent;
