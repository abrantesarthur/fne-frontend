import React, { Component } from "react";
import HoverComponent from "./hoverComponent";

class Icon extends Component {
  render() {
    return (
      <HoverComponent
        hoverColor={this.props.hoverColor}
        noHoverColor={this.props.noHoverColor}
      >
        {this.props.children}
      </HoverComponent>
    );
  }
}

export default Icon;
