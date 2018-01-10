import React, { Component} from 'react';
import Navbar from './navbar';
import About from './about';
import Projects from './projects';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Navbar />
        <About />
        <Projects />
        <Projects />
      </div>
    )
  }
}

export default App;
