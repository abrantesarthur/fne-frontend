import React, { Component } from "react";
import Icon from "../common/icon";
import navStyles from "./css/navRightLeft.js";
import styles from "./css/navLeft.js";

class NavLeft extends Component {
  state = {
    hover: false,
  };

  render() {
    return (
      <div style={navStyles.container}>
        <div style={styles.leftItem}>
          <Icon hoverColor="rgba(0,0,0,0.6)" noHoverColor="rgba(0,0,0,0.5)">
            <i className="fa fa-1x fa-chevron-circle-left"></i>
          </Icon>
        </div>
        <div style={styles.rightItem}>
          <Icon hoverColor="rgba(0,0,0,0.6)" noHoverColor="rgba(0,0,0,0.5)">
            <i className="fa fa-1x fa-cog"></i>
          </Icon>
        </div>
      </div>
    );
  }
}

export default NavLeft;
