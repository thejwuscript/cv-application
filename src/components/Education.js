import React, { Component } from "react";
import AddButton from './AddButton';
import NewEducationForm from "./NewEducationForm";
import School from './School';
class Education extends Component {
  constructor() {
    super();

    this.state = {
      mode: "view",
      educationList: [],
    };

    this.toggleMode = this.toggleMode.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  toggleMode() {
    let desiredMode = this.state.mode === "view" ? "new" : "view"

    this.setState({
      mode: desiredMode,
    })
  }

  addToList(schoolObj) {
    this.setState({
      educationList: this.state.educationList.concat(schoolObj)
    })
  }

  render() {
    let bottomElement;

    if (this.state.mode === "view") {
      bottomElement = <AddButton toggle={this.toggleMode} />
    } else {
      bottomElement = <NewEducationForm toggle={this.toggleMode} saveInfo={this.addToList} />
    }

    return (
      <div className="education-container">
        <h2>Education</h2>
        {this.state.educationList.map(item => <School key={item.id} schoolInfo={item} />)}
        {bottomElement}
      </div>
    );
  }
}

export default Education;
