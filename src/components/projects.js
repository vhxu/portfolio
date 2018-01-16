import React, { Component } from 'react';

class Projects extends Component {
  render(){
    return (
      <div className='project'>
        <div className='description'>
          <h2>{this.props.title}</h2>
          <div>asdkjfaksfjlkasjflkasldkfalksjflasflsadlfsklafjlksafjlakshflsafh</div>
          <div>Skills used React JS HTML SASS</div>
          <div>Links to DEMO and GITHUB</div>
        </div>
      </div>
    )
  }
}

export default Projects;
