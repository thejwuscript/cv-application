import React, { Component } from 'react';
import Form from './components/Form';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: this.props.page,
    }

    this.changePage = this.changePage.bind(this);
  }

  changePage() {
    this.setState({
      page: "showResume",
    })
  }

  render() {
    const { page } = this.state;

    if (page === "newResume") {
      return (
        <div>
          <Form changePage={this.changePage} />
        </div>
      );
    } else if (page === "showResume") {
      return (
        <div>
          Show completed resume here.
        </div>
      );
    };
  };
};

export default App;
