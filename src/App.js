import React, { Component } from 'react';
import logo from './sun-banner.jpg';
import './App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

const example = "hello world" // eslint-disable-line

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          <h2>In Search Of Happiness</h2>
        </div>
      </div>
    );
  }
}

export default App;
