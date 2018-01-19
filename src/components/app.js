import React, { Component} from 'react';
import Navbar from './navbar';
import About from './about';
import Projects from './projects';
import projectInfo from '../data/project-info';
import Contact from './contact';

class App extends Component {
  constructor(props) {
    super(props);

    this.mapProjects = this.mapProjects.bind(this);
  }

  mapProjects() {
    return projectInfo.map((info, i) => {
      const title = info.title;
      const description = info.description;
      const screenshot = info.screenshot;
      const color = info.color;
      const skills = info.skills;
      const github = info.links.github;
      const preview = info.links.preview;
      return (
        <Projects key={i} title={title} description={description} screenshot={screenshot} color={color} skills={skills} github={github} preview={preview} />
      );
    })
  }


  render() {
    return (
      <div>
        <Navbar />
        <About />
        <div className='projects-section'>
          <h2>Projects</h2>
          <div className='projects-component'>
            {this.mapProjects()}
          </div>
        </div>
        <Contact />
      </div>
    )
  }
}

export default App;
