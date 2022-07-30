import React, { Component } from "react";
import AddButton from './AddButton';
import NewEducationForm from "./NewEducationForm";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      mode: "view",
    };

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    let desiredMode = this.state.mode === "view" ? "new" : "view"

    this.setState({
      mode: desiredMode,
    })
  }

  render() {
    let bottomElement;

    if (this.state.mode === "view") {
      bottomElement = <AddButton toggle={this.toggleMode} />
    } else {
      bottomElement = <NewEducationForm toggle={this.toggleMode} />
    }

    return (
      <div className="education-container">
        <h2>Education</h2>
        {bottomElement}
      </div>
    );
  }
}

export default Education;
