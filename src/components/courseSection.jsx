import React, { Component } from "react";
import SectionTitle from "./sectionTitle";
import Lectures from "./lectures";

class CourseSection extends Component {
  render() {
    const { mod } = this.props;
    return (
      <div>
        <div>
          <SectionTitle mod={mod}></SectionTitle>
        </div>
        <div>
          <Lectures lectures={mod.classes}></Lectures>
        </div>
      </div>
    );
  }
}

export default CourseSection;
