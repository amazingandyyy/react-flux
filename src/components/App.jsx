import React, { Component } from 'react';
import DashBoard from './DashBoard';

export default class App extends Component {
  render() {
      return (
          <div className="container text-center">
              <DashBoard/>
              <div className="container">
                  {this.props.children}
              </div>
          </div>
      )
  }
}
