import React, { Component } from 'react';
import logo from '../public/isoh-logo.png';
import './App.css';
import BubbleNavigator from './components/bubbleNavigator';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <a href={'/'}><img src={logo} className='App-logo' alt='logo' /></a>
        </div>
        <div className='App-body'>
          <h4>Helping developers find their dream company to work for</h4>
          <BubbleNavigator />
        </div>
      </div>
    );
  }
}

export default App;
