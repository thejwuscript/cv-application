import React, { Component } from "react";

class School extends Component {
  constructor(props) {
    super(props);

    let info = this.props.schoolInfo;

    this.state = {
      mode: "view",
      id: info.id,
      name: info.school,
      degree: info.degree,
      date: info.date,
      nameInput: info.school,
      degreeInput: info.degree,
      dateInput: info.date,
    };

    this.toggleMode = this.toggleMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.viewInfo = this.viewInfo.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  toggleMode() {
    let toggle = this.state.mode === "view" ? "edit" : "view";
    this.setState({
      mode: toggle,
      nameInput: this.state.name,
      degreeInput: this.state.degree,
      dateInput: this.state.date,
    });
  }

  viewInfo() {
    return (
      <div
        key={this.state.id}
        className="school-container"
        onClick={this.toggleMode}
      >
        <div className="school-top-container">
          <p className="school-name">{this.state.name}</p>
          <p className="date-of-study">{this.state.date}</p>
        </div>
        <p className="degree">{this.state.degree}</p>
      </div>
    );
  }

  saveInfo() {
    this.setState({});
  }

  editInfo() {
    return (
      <form onSubmit={this.saveInfo}>
        <div>
          <input
            type="text"
            id="nameInput"
            placeholder="School Name"
            value={this.state.nameInput}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="degreeInput"
            placeholder="Degree"
            value={this.state.degreeInput}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="dateInput"
            placeholder="Date of Study"
            value={this.state.dateInput}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={this.toggleMode}>
            Cancel
          </button>
        </div>
      </form>
    );
  }

  render() {
    let mode;

    if (this.state.mode === "edit") {
      mode = this.editInfo();
    } else {
      mode = this.viewInfo();
    }

    return mode;
  }
}

export default School;
