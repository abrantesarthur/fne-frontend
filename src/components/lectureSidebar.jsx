import React, { Component } from "react";
import CourseSection from "./courseSection";

class LectureSidebar extends Component {
  render() {
    const { course } = this.props;
    return (
      <div>
        {course.modules.map((m) => (
          <div>
            <CourseSection key={m._id} mod={m}></CourseSection>
          </div>
        ))}
      </div>
    );
  }
}

export default LectureSidebar;
