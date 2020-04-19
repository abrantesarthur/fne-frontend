import React, { Component } from "react";
import Lecture from "./lecture";

class Lectures extends Component {
  render() {
    const { lectures } = this.props;
    return (
      <div>
        {lectures.map((lecture, index) => (
          <div>
            <Lecture
              key={lecture._id}
              lecture={lecture}
              index={index}
            ></Lecture>
          </div>
        ))}
      </div>
    );
  }
}

export default Lectures;
