import React, { Component } from "react";
import General from "./General";
import Education from "./Education";

class Form extends Component {
  
  // onSubmitForm(e) {
  //   e.preventDefault();
  //   console.log('called');
  //   this.props.changePage()
  // }
  
  render() {
    return (
      <form onSubmit={this.props.changePage}>
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
