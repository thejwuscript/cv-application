import React, { Component } from 'react';

class General extends Component {

  render() {
    return (
      <div>
        <h3>General Info</h3>
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
        </div>
      </div>
    )
  };
};

export default General;
