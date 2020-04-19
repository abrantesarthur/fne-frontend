import React, { Component } from "react";
import NavLeft from "./navLeft";
import NavRight from "./navRight";
import styles from "./css/courseHeaderBody";

class CourseHeader extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.leftItem}>
          <NavLeft></NavLeft>
        </div>
        <div style={styles.rightItem}>
          <NavRight></NavRight>
        </div>
      </div>
    );
  }
}

export default CourseHeader;
