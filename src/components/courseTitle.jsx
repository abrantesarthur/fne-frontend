import React, { Component } from "react";
import styles from "./css/courseTitle";

class CourseTitle extends Component {
  render() {
    const { title } = this.props;
    return (
      <div style={styles.container}>
        <h3 style={styles.h3}>{title}</h3>
      </div>
    );
  }
}

export default CourseTitle;
