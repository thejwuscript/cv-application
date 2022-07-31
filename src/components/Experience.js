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
    this.editList = this.editList.bind(this);
  }

  addToList(obj) {
    this.setState({
      experienceList: this.state.experienceList.concat(obj),
    })
  }

  editList(obj, index) {
    let copyOfList = this.state.experienceList.slice();
    copyOfList[index] = obj;
    this.setState({ experienceList: copyOfList });
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
      bottomElement = <ExperienceForm toggle={this.toggleMode} saveInfo={this.addToList} job={{}} />
    }

    return (
      
      <div className="experience-container">
        <h2>Work Experience</h2>
        <WorkExperienceList jobs={this.state.experienceList} editInfo={this.editList} />
        {bottomElement}
      </div>
    )
  }
};

export default Experience;
