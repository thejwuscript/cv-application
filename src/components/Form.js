import React, { Component } from "react";
import General from "./General";
import Education from "./Education";

class Form extends Component {
  constructor() {
    super()

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  
  onSubmitForm(e) {
    e.preventDefault();
    console.log(this);
    this.props.changePage()
  }
  
  render() {
    

    return (
      <form onSubmit={this.onSubmitForm}>
        <General />
        <hr />
        <Education />
        <hr />
        <button type="submit">Create Resume!</button>
      </form>
    )
  };
};

export default Form;
