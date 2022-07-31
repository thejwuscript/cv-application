import React, { Component } from "react";
import Job from "./Job";
import uniqid from "uniqid";

class WorkExperienceList extends Component {
  render() {
    const jobs = this.props.jobs;

    return jobs.map((job, index) => {
      return <Job key={uniqid()} job={job} editInfo={this.props.editInfo} index={index} />
    });
  }
}

export default WorkExperienceList;
