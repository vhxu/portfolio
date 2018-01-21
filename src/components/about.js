import React, { Component } from 'react';
import AboutEditor from './about-editor';

class About extends Component {
  render() {
    return (
      <div id='about-link'>
        <div className='intro-container'>
          <div className='intro'>
            <h1>Hello, World!</h1>
            <div>My name is <span>Virgil Xu</span>, a <span>Front-End Engineer</span> in the Bay Area. I like to work on fun and challenging web applications. Check out my <span>projects</span>!</div>
          </div>
        </div>
        <AboutEditor />
      </div>
    )
  }
}

export default About;
