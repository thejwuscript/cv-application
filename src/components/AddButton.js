import React, { Component } from "react";

class AddButton extends Component {
  render() {
    return (
      <button type="button" className="add-button" onClick={this.props.toggle}>
        Add...
      </button>
    );
  }
}

export default AddButton;