import React, { Component } from 'react';

class AboutEditor extends Component {
  render() {
    return (
      <div className='editor-container'>
        <div className='window-bar'>
          <div className='circle' style={{backgroundColor:'#f86359'}}></div>
          <div className='circle' style={{backgroundColor:'#fdbc4e'}}></div>
          <div className='circle' style={{backgroundColor:'#38c954'}}></div>
        </div>
        <div className='editor-bar'>
          <div className='tab'>about-me.js</div>
        </div>
        <div className='editor-window'>
          <div className='grey'><span className='numbers'>1</span><span className='indent' style={{color:'#c675db'}}>const</span><span style={{color:'orange'}}>aboutMe</span><span className='turquoise'>=</span> {'{'}</div>
          <div className='grey'><span className='numbers'>2</span><span className='indent2'>name</span><span className='turquoise'>:</span><span className='green'>'Virgil Xu'</span>,</div>
          <div className='grey'><span className='numbers'>3</span><span className='indent2'>currentLocation</span><span className='turquoise'>:</span><span className='green'>'San Jose, CA'</span>,</div>
          <div className='grey'><span className='numbers'>4</span><span className='indent2'>resume</span><span className='turquoise'>:</span><span className='green'>'Virgil Xu resume.pdf'</span>,</div>
          <div className='grey'><span className='numbers'>5</span><span className='indent2'>email</span><span className='turquoise'>:</span><span className='green'>'virgilxu89@gmail.com'</span>,</div>
          <div className='grey'><span className='numbers'>6</span><span className='indent2'>Github</span><span className='turquoise'>:</span><span className='green'>'Github'</span>,</div>
          <div className='grey'><span className='numbers'>7</span><span className='indent2'>LinkedIn</span><span className='turquoise'>:</span><span className='green'>'LinkedIn'</span>,</div>
          <div className='grey'><span className='numbers'>8</span><span className='indent2'>GradEducation</span><span className='turquoise'>:</span><span className='green'>'M.S. Engineering with Emphasis in Batteries, San Jose State University'</span>,</div>
          <div className='grey'><span className='numbers'>9</span><span className='indent2'>UnderGradEducation</span><span className='turquoise'>:</span><span className='green'>'B.S. Chemical Engineering, University of California, Davis'</span>,</div>
          <div className='grey'><span className='numbers'>10</span><span className='indent2'>skills</span><span className='turquoise'>:</span>[<span className='green'>'HTML5'</span>,<span className='green'>'CSS3'</span>,<span className='green'>'Sass'</span>,
            <span className='green'>'JavaScript'</span>,<span className='green'>'ReactJS'</span>, <span className='green'>'Webpack'</span>]</div>
          <div className='grey'><span className='numbers'>11</span><span className='indent'>}</span></div>
        </div>
      </div>
    )
  }
}

export default AboutEditor;
