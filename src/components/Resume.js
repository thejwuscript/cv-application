import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import "../styles/resume.css";

class Resume extends Component {
  
  render() {
    return (
      <div className="resume-container">
        <General />
        <hr />
        <Education />
        <hr />
      </div>
    )
  };
};

export default Resume;
