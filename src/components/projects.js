import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.mapSkills = this.mapSkills.bind(this);
  }

  mapSkills() {
    return this.props.skills.map((skills, i) => {
      return <div key={i} className='skills'>{skills}</div>
    })

  }

  render(){
    return (
      <div className='project' style={{backgroundColor: this.props.color}}>
        <div className='description-container'>
          <div className='description'>
            <h2>{this.props.title}</h2>
            <div>{this.props.description}</div>
            <div className='skills-list'>{this.mapSkills()}</div>
            <div>{this.props.github}</div>
            <div>{this.props.preview}</div>
          </div>
        </div>

        <div className='screenshot-container'>
          <div className='screenshot' style={{backgroundImage: this.props.screenshot}}>
        </div>

        </div>
      </div>
    )
  }
}

export default Projects;
