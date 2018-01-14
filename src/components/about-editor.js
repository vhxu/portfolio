import React, { Component } from 'react';

class AboutEditor extends Component {
  render() {
    return (
      <div>
        <div className='window-bar'>window bar</div>
        <div className='editor-bar'>about-me.js</div>
        <div className='editor-window'>
          <div><span className='numbers'>1</span>const aboutMe = </div>
          <div><span className='numbers'>2</span>name: 'Virgil Xu',</div>
          <div><span className='numbers'>3</span>currentLocation: 'San Jose, CA'</div>
          <div><span className='numbers'>4</span>'resume'</div>
          <div><span className='numbers'>5</span>email: 'virgilxu89@gmail.com'</div>
          <div><span className='numbers'>6</span>Github: 'Github'</div>
          <div><span className='numbers'>7</span>LinkedIn: 'LinkedIn'</div>
          <div><span className='numbers'>8</span>GradEducation: 'M.S. Engineering with Emphasis in Batteries, San Jose State University'</div>
          <div><span className='numbers'>9</span>UnderGradEducation: 'B.S. Chemical Engineering, University of California, Davis'</div>
          <div><span className='numbers'>10</span>skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS', 'Webpack']</div>
          <div><span className='numbers'>11</span>}</div>
        </div>
      </div>
    )
  }
}

export default AboutEditor;
