import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <div className='navbar-container'>
        <div className='navbar'>
          <div><a href='#about-link'>about</a></div>
          <div><a href='#projects-link'>projects</a></div>
          <div><a href='#contact-link'>contact</a></div>
        </div>
      </div>

    )
  }
}

export default Navbar;
