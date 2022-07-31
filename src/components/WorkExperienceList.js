import React, { Component } from "react";
import Job from "./Job";
import uniqid from "uniqid";

class WorkExperienceList extends Component {
  render() {
    const jobs = this.props.jobs;

    return jobs.map(job => {
      return <Job key={uniqid()} job={job} saveInfo={this.props.saveInfo} />
    });
  }
}

export default WorkExperienceList;
