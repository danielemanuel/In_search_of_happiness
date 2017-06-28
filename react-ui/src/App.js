import React, { Component } from 'react';
import logo from '../public/isoh-logo.png';
import banner from '../public/purpose-img.png';
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
          <img src={banner} className='Banner'/>
          <BubbleNavigator />
        </div>
      </div>
    );
  }
}

export default App;
