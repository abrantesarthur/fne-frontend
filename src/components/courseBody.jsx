import React, { Component } from "react";
import SideBar from "./sidebar";
import { getCourse } from "../services/fakeCourse";
import styles from "./css/courseHeaderBody";

class CourseBody extends Component {
  state = {
    course: getCourse(1),
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.leftItem}>
          <SideBar course={this.state.course}></SideBar>
        </div>
        <div style={styles.rightItem}>
          <h1>The video is supposed to be here</h1>
        </div>
      </div>
    );
  }
}

export default CourseBody;
