import React, { Component } from "react";
import { compileSeconds } from "../util/util";
import styles from "./css/sectionTitle";

class SectionTitle extends Component {
  render() {
    const { mod } = this.props;
    const totalSeconds = this.props.mod.classes.reduce(
      (acc, c) => acc + c.length,
      0
    );
    let sectionDuration = compileSeconds(totalSeconds);
    return (
      <div style={styles.text} className="section-title">
        {mod.title} <span style={styles.text}>({sectionDuration})</span>
      </div>
    );
  }
}

export default SectionTitle;
