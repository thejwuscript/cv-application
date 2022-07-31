import React, { Component } from "react";

class School extends Component {
  constructor(props) {
    super(props)

    let info = this.props.schoolInfo

    this.state = {
      id: info.id,
      name: info.school,
      degree: info.degree,
      date: info.date,
    }
  } 

  render() {
    return (
      <div key={this.state.id} className="school-container">
        <div className="school-top-container">
          <p className="school-name">{this.state.name}</p>
          <p className="date-of-study">{this.state.date}</p>
        </div>
        <p className="degree">{this.state.degree}</p>
      </div>
    );
  }
}

export default School;
