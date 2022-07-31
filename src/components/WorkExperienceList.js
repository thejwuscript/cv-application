import React, { Component } from "react";
import ExperienceForm from "./ExperienceForm";
import Job from "./Job";
import uniqid from "uniqid";

class WorkExperienceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "view",
      companyNameInput: this.props.companyName,
      titleInput: this.props.position,
      taskOneInput: this.props.taskOne,
      taskTwoInput: this.props.taskTwo,
      dateInput: this.props.date,
    };

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    let toggle = this.state.mode === "view" ? "edit" : "view";
    this.setState({
      mode: toggle,
    });
  }

  viewJobsInfo() {
    const { jobs } = this.props;

    return jobs.map(job => {
      return <Job key={uniqid()} job={job} />
    });
  }

  render() {
    let display

    if (this.state.mode === "view") {
      display = <div>{this.viewJobsInfo()}</div>
    } else {
      display = <ExperienceForm />
    }

    return display;
  }
}

export default WorkExperienceList;
