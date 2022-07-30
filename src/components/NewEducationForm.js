import React, { Component } from "react";

class NewEducationForm extends Component {
  constructor() {
    super();

    this.state = {
      schoolName: '',
      degree: '',
      date: '',
    }
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  
  render() {
    return (
      <form action="">
        <div>
          <input
            type="text"
            id="schoolName"
            placeholder="School Name"
            value={this.state.schoolInput}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <input type="text" id="degree" placeholder="Degree" value={this.state.degreeInput} onChange={this.handleChange} required />
        </div>
        <div>
          <input type="text" id="date" placeholder="Date of Study" value={this.state.dateInput} onChange={this.handleChange} required />
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={this.props.toggle}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NewEducationForm;
