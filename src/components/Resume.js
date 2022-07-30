import React, { Component } from "react";
import General from "./General";
import Education from "./Education";

class Resume extends Component {
  
  render() {
    return (
      <form>
        <General />
        <hr />
        <Education />
        <hr />
      </form>
    )
  };
};

export default Resume;
