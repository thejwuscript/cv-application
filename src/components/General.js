import React, { Component } from "react";
import "../styles/general.css";

class General extends Component {
  constructor() {
    super();

    this.state = {
      mode: "view",
      savedName: "Name",
      savedPhone: "Phone",
      savedEmail: "Email",
      inputName: "",
      inputPhone: "",
      inputEmail: "",
    };

    this.changeMode = this.changeMode.bind(this);
    this.saveInputs = this.saveInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeMode(e) {
    const desiredMode = this.state.mode === "view" ? "edit" : "view";
    this.setState({
      mode: desiredMode,
      inputName: this.state.savedName,
      inputPhone: this.state.savedPhone,
      inputEmail: this.state.savedEmail,
    });
  }

  saveInputs(e) {
    e.preventDefault();
    this.setState({
      savedName: this.state.inputName,
      savedPhone: this.state.inputPhone,
      savedEmail: this.state.inputEmail,
    });
    this.changeMode();
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  inputForm() {
    return (
      <form onSubmit={this.saveInputs}>
        <div>
          <input
            type="text"
            id="inputName"
            placeholder="Name"
            value={this.state.inputName}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="inputPhone"
            placeholder="Phone"
            value={this.state.inputPhone}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="inputEmail"
            placeholder="Email"
            value={this.state.inputEmail}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={this.changeMode}>
            Cancel
          </button>
        </div>
      </form>
    );
  }

  showInfo() {
    return (
      <div className="general">
        <h2>{this.state.savedName}</h2>
        <p>{this.state.savedPhone}</p>
        <p>{this.state.savedEmail}</p>
        <button type="button" onClick={this.changeMode}>
          Edit
        </button>
      </div>
    );
  }

  render() {
    const mode = this.state.mode;
    let display;

    if (mode === "edit") {
      display = this.inputForm();
    } else {
      display = this.showInfo();
    }

    return display;
  }
}

export default General;
