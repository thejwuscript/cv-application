import React, { Component } from "react";
import ExperienceForm from "./ExperienceForm";

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "view",
    };

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    let toggle = this.state.mode === "view" ? "edit" : "view";

    this.setState({ mode: toggle });
  }

  viewMode() {
    const job = this.props.job;

    return (
      <div onClick={this.toggleMode} className="job-container">
        <div className="job-top-container">
          <p className="company-name">{job.companyName}</p>
          <p className="date-of-employment">{job.date}</p>
        </div>
        <p className="job-title">{job.position}</p>
        <ul>
          <li>{job.taskOne}</li>
          <li>{job.taskTwo}</li>
        </ul>
      </div>
    );
  }

  render() {
    let display;

    if (this.state.mode === "view") {
      display = this.viewMode();
    } else {
      display = (
        <ExperienceForm
          job={this.props.job}
          toggle={this.toggleMode}
          editInfo={this.props.editInfo}
          index={this.props.index}
        />
      );
    }

    return display;
  }
}

export default Job;
