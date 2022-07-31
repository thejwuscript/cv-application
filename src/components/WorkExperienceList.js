import React, { Component } from "react";
import uniqid from "uniqid";

class WorkExperienceList extends Component {
  render() {
    const { jobs } = this.props;

    return (
      <div>
        {jobs.map((job) => {
          return (
            <div key={uniqid()}>
              <p>{job.companyName}</p>
              <p>{job.position}</p>
              <ul>
                <li>{job.taskOne}</li>
                <li>{job.taskTwo}</li>
              </ul>
              <p>{job.date}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkExperienceList;
