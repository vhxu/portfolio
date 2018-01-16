import React, { Component } from 'react';
import AboutEditor from './about-editor';

class About extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>My name is Virgil Xu, a Front-End Engineer in the Bay Area. I like to work on fun and challenging web applications. Check out my projects!</h2>
        <AboutEditor />
      </div>
    )
  }
}

export default About;
