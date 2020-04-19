import React, { Component } from "react";
import CourseTitle from "./courseTitle";
import Progress from "./progress";
import LectureSidebar from "./lectureSidebar";
import styles from "./css/sideBar.js";

// Interface
//    Progress
//      currentProgress: rate of completed classes. Insert in the fakeCourse.

class SideBar extends Component {
  render() {
    const { course } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.item}>
          <CourseTitle title={course.title}></CourseTitle>
        </div>
        <div style={styles.item}>
          <Progress course={course}></Progress>
        </div>
        <div style={styles.item}>
          <LectureSidebar course={course}></LectureSidebar>
        </div>
      </div>
    );
  }
}

export default SideBar;
