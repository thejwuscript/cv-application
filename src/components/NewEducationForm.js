import React, { Component } from "react";

class NewEducationForm extends Component {
  constructor() {
    super();

    this.state = {
      schoolName: '',
      degree: '',
      date: '',
    }

    this.packageFormData = this.packageFormData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  packageFormData(e) {
    e.preventDefault();
    let object = {
      school: this.state.schoolName,
      degree: this.state.degree,
      date: this.state.date,
    }
    this.props.toggle()
    //call the prop here and pass in object
    this.props.saveInfo(object);
  }
  
  render() {
    return (
      <form onSubmit={this.packageFormData}>
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
