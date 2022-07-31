import React, { Component } from "react";

class Job extends Component {
  render() {
    const job = this.props.job;

    return (
      <div className="job-container">
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
}

export default Job;
