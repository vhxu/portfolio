import React, { Component } from 'react';
import AboutEditor from './about-editor';

class About extends Component {
  render() {
    return (
      <div id='about-link'>
        <div className='intro-container'>
          <div className='intro'>
            <h1>Hello, World!</h1>
            <div>My name is <span><a href='https://www.virgilxu.com'>Virgil Xu</a></span>, a <span><a href='https://github.com/vhxu'>Front-End Engineer</a></span> in the Bay Area. I like to work on fun and challenging web applications. Check out my <span><a href='#projects-link'>projects</a></span>!</div>
          </div>
        </div>
        <AboutEditor />
      </div>
    )
  }
}

export default About;
