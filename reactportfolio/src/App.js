import React, {Component} from 'react';
import './App.css';
import About from './components/about'
import Sidebar from './components/sidebar'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar> 
          <div id="colorlib-main">
            <About></About>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
