import React, { Component } from 'react';
import AboutEditor from './about-editor';

class About extends Component {
  render() {
    return (
      <div>
        <div className='intro-container'>
          <div className='intro'>
            <h1>Hello, World!</h1>
            <div>My name is Virgil Xu, a Front-End Engineer in the Bay Area. I like to work on fun and challenging web applications. Check out my projects!</div>
          </div>
        </div>
        <AboutEditor />
      </div>
    )
  }
}

export default About;
