import React, { Component } from 'react';
import logo from './sun-banner.jpg';
import './App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  state = {companies: []}

  componentDidMount() {
    fetch('/companies')
      .then(res => res.json())
      .then(companies => this.setState({ companies }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>In Search Of Happiness</h2>
        </div>
        <div className="App-body">
          <h3>Companies</h3>
          <ol>
            {this.state.companies.map(company =>
              <li>{company.name}</li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
