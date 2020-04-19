import React, { Component } from "react";
import HoverComponent from "../common/hoverComponent";
import navStyles from "./css/navRightLeft.js";
import styles from "./css/navRight.js";

class NavRight extends Component {
  state = {
    hover: false,
  };

  render() {
    return (
      <div style={navStyles.container}>
        <HoverComponent
          hoverColor="white"
          noHoverColor="rgba(0,0,0,0.5)"
          hoverBgColor="#FC4364"
          noHoverBgColor="white"
        >
          <a>
            <i className="fa fa-1x fa-arrow-left"></i>
            <span style={styles.navText}>Aula anterior</span>
          </a>
        </HoverComponent>
        <HoverComponent
          hoverColor="white"
          noHoverColor="rgba(0,0,0,0.5)"
          hoverBgColor="#FC4364"
          noHoverBgColor="white"
        >
          <a>
            <span style={styles.navText}>Completar e continuar</span>
            <i className="fa fa-1x fa-arrow-right"></i>
          </a>
        </HoverComponent>
      </div>
    );
  }
}
export default NavRight;
