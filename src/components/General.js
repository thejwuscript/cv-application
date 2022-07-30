import React, { Component } from 'react';
import '../styles/general.css';

class General extends Component {

  render() {
    return (
      <div className="general">
         <h2>Name</h2>
         <p>Phone</p>
         <p>Email</p>
         <button type="button">Edit</button>
      </div>
    )
  };
};

export default General;

{/* <form action="">
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
<div>
  <button type="submit">Edit</button>
  <button type="button">Cancel</button>
</div>
</form> */}
