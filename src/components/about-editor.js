import React, { Component } from 'react';

class AboutEditor extends Component {
  render() {
    return (
      <div className='editor-section'>
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
            <div className='grey'><span className='numbers'>1</span><span className='indent' style={{color:'#c675db'}}>const</span><span className='space-left' style={{color:'orange'}}>aboutMe</span><span className='turquoise space-left space-right'>=</span> {'{'}</div>
            <div className='grey'><span className='numbers'>2</span><span className='indent2'>name</span><span className='turquoise'>:</span><span className='green space-left'>'Virgil Xu'</span>,</div>
            <div className='grey'><span className='numbers'>3</span><span className='indent2'>currentLocation</span><span className='turquoise'>:</span><span className='green space-left'>'San Jose, CA'</span>,</div>
            <div className='grey'><span className='numbers'>4</span><span className='indent2'>resume</span><span className='turquoise'>:</span><span className='green space-left'>'Virgil Xu resume.pdf'</span>,</div>
            <div className='grey'><span className='numbers'>5</span><span className='indent2'>email</span><span className='turquoise'>:</span><span className='green space-left'>'virgilxu89@gmail.com'</span>,</div>
            <div className='grey'><span className='numbers'>6</span><span className='indent2'>Github</span><span className='turquoise'>:</span><span className='green space-left'>'Github'</span>,</div>
            <div className='grey'><span className='numbers'>7</span><span className='indent2'>LinkedIn</span><span className='turquoise'>:</span><span className='green space-left'>'LinkedIn'</span>,</div>
            <div className='grey small-window'><span className='numbers'>8</span><span className='indent2'>GradEducation</span><span className='turquoise'>:</span><span className='green space-left education-long'>'M.S. Engineering, Emphasis in Batteries, San Jose State University'</span><span className='green space-left education-short'>'M.S. Engineering, Emphasis in Batteries, SJSU'</span>,</div>
            <div className='grey small-window'><span className='numbers'>9</span><span className='indent2'>UnderGradEducation</span><span className='turquoise'>:</span><span className='green space-left education-long'>'B.S. Chemical Engineering, University of California, Davis'</span><span className='green space-left education-short'>'B.S. Chemical Engineering, UC Davis'</span>,</div>
            <div className='grey small-window'><span className='numbers'>10</span><span className='indent2'>skills</span><span className='turquoise space-right'>:</span>[<span className='green'>'HTML5'</span>,<span className='green space-left'>'CSS3'</span>,<span className='green space-left'>'Sass'</span>,
              <span className='green space-left'>'JavaScript'</span>,<span className='green space-left'>'ReactJS'</span>, <span className='green space-left'>'Webpack'</span>]</div>
            <div className='grey'><span className='small-window numbers'>11</span><span className='numbers large-window'>8</span><span className='indent'>}</span></div>
          </div>
        </div>
      </div>

    )
  }
}

export default AboutEditor;
