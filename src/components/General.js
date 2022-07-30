import React, { Component } from 'react';

class General extends Component {

  render() {
    return (
      <div>
        <h3>General Info</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>
      </div>
    )
  };
};

export default General;
