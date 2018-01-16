import React, { Component} from 'react';
import Navbar from './navbar';
import About from './about';
import Projects from './projects';
import projectInfo from '../data/project-info';

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
        <Projects key={i} title={title} description={description} screenshot={screenshot} color={color} skills={skills} />
      );
    })
  }


  render() {
    return (
      <div>
        <Navbar />
        <About />
        {this.mapProjects()}
      </div>
    )
  }
}

export default App;
