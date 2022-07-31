import React, { Component } from "react";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      position: "",
      taskOne: "",
      taskTwo: "",
      date: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.packageFormData = this.packageFormData.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  packageFormData(e) {
    e.preventDefault();
    const object = this.state;
    this.props.toggle();
    this.props.saveInfo(object);
  }

  render() {
    return (
      <form onSubmit={this.packageFormData}>
        <div>
          <input
            id="companyName"
            type="text"
            placeholder="Company Name"
            value={this.state.companyName}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            id="position"
            type="text"
            placeholder="Position"
            value={this.state.position}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            id="taskOne"
            type="text"
            placeholder="Task"
            value={this.state.taskOne}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            id="taskTwo"
            type="text"
            placeholder="Task"
            value={this.state.taskTwo}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            id="date"
            type="text"
            placeholder="Date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={this.props.toggle}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default ExperienceForm;
