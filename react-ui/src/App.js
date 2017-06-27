import React, { Component } from 'react';
import logo from '../public/isoh-logo.png';
import RadarComparison from './components/radar';
import List from './components/list';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>In Search Of Happiness</h2>
        </div>
        <div className='App-body'>
          <h3>Companies</h3>
          <RadarComparison/>
          <List/>
        </div>
      </div>
    );
  }
}

export default App;
