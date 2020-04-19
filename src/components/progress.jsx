import React, { Component } from "react";
import styles from "./css/progress";

class Progress extends Component {
  calculateCompletionRate(course) {
    let totalClasses = course.modules.reduce(
      (acc, mod) => acc + mod.classes.length,
      0
    );
    let completedClasses = course.modules.reduce(
      (acc, mod) =>
        acc + mod.classes.reduce((acc, c) => acc + (c.completed ? 1 : 0), 0),
      0
    );
    return Math.floor((100 * completedClasses) / totalClasses);
  }

  render() {
    const { course } = this.props;
    return (
      <div style={styles.container}>
        <div className="progress" style={styles.progress}>
          <div
            className="progress-bar bg-success"
            style={{ width: "34%" }}
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div style={styles.percentage}>
          <span>{this.calculateCompletionRate(course)}% complete</span>
        </div>
      </div>
    );
  }
}

export default Progress;
