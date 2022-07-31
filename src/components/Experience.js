import React, { Component } from 'react';
import AddButton from './AddButton';
import ExperienceForm from './ExperienceForm';
import WorkExperienceList from './WorkExperienceList';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      mode: "view",
      experienceList: [],
    }

    this.toggleMode = this.toggleMode.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  addToList(obj) {
    this.setState({
      experienceList: this.state.experienceList.concat(obj),
    })
  }

  toggleMode() {
    let toggle = this.state.mode === "view" ? "new" : "view"
    this.setState({ mode: toggle })
  }

  render() {
    let bottomElement;

    if (this.state.mode === "view") {
      bottomElement = <AddButton toggle={this.toggleMode} />
    } else {
      bottomElement = <ExperienceForm toggle={this.toggleMode} saveInfo={this.addToList} />
    }

    return (
      
      <div className="experience-container">
        <h2>Work Experience</h2>
        <WorkExperienceList jobs={this.state.experienceList} />
        {bottomElement}
      </div>
    )
  }
};

export default Experience;
