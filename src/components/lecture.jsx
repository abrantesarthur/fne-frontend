import React, { Component } from "react";
import { compileSeconds } from "../util/util";
import styles from "./css/lecture";

class Lecture extends Component {
  state = {
    hover: false,
  };

  handleOnMouseEnter() {
    this.setState({ hover: !this.state.hover });
  }
  handleOnMouseLeave() {
    this.setState({ hover: !this.state.hover });
  }

  renderContainerStyle(lecture) {
    if (lecture.completed) {
      return this.state.hover
        ? { ...styles.container, background: "#E6E6E6" }
        : { ...styles.container, background: "#F0F0F0" };
    } else {
      return this.state.hover
        ? { ...styles.container, background: "#F0F0F0" }
        : { ...styles.container, background: "white" };
    }
  }

  renderCircleStyle(lecture) {
    if (lecture.completed) {
      return this.state.hover
        ? { ...styles.circle, color: "rgba(0, 0, 0, 0.6)" }
        : { ...styles.circle, color: "rgba(0, 0, 0, 0.5)" };
    } else {
      return this.state.hover
        ? { ...styles.circle, color: "rgba(0, 0, 0, 0.5)" }
        : { ...styles.circle, color: "#5BC0EB" };
    }
  }

  renderPlayStyle(lecture) {
    if (lecture.completed) {
      return this.state.hover
        ? { ...styles.play, color: "rgba(0, 0, 0, 0.6)" }
        : { ...styles.play, color: "rgba(0, 0, 0, 0.5)" };
    } else {
      return this.state.hover
        ? { ...styles.play, color: "rgba(0, 0, 0, 0.9)" }
        : { ...styles.play, color: "rgba(0, 0, 0, 1)" };
    }
  }

  renderCircleClasses(lecture) {
    return lecture.completed
      ? "fa fa-1x fa-check-circle"
      : "fa fa-1x fa-circle-thin";
  }

  render() {
    const { index, lecture } = this.props;
    return (
      <div
        onMouseEnter={() => this.handleOnMouseEnter()}
        onMouseLeave={() => this.handleOnMouseLeave()}
        style={this.renderContainerStyle(lecture)}
      >
        <div>
          <i
            style={this.renderCircleStyle(lecture)}
            className={this.renderCircleClasses(lecture)}
          ></i>
        </div>
        <div>
          <i
            style={this.renderPlayStyle(lecture)}
            className="fa fa-1x fa-play-circle"
          ></i>
        </div>
        <div>
          <p style={styles.title}>
            {index} - {lecture.title} ({compileSeconds(lecture.length)})
          </p>
        </div>
      </div>
    );
  }
}

export default Lecture;
