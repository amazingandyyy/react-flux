import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {
  render() {
      return (
          <div className="container text-center">
              <NavBar/>
              <div className="container">
                  {this.props.children}
              </div>
          </div>
      )
  }
}
export default App;
