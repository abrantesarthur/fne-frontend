import React from "react";
import "./App.css";
import CourseBody from "./components/courseBody";
import CourseHeader from "./components/courseHeader";

function App() {
  return (
    <div className="app-container">
      <div>
        <CourseHeader></CourseHeader>
      </div>
      <div>
        <CourseBody></CourseBody>
      </div>
    </div>
  );
}

export default App;
