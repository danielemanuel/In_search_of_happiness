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
          <a href={'/'}>
            <div>
              <img src={logo} className='App-logo' alt='logo' />
            </div>
          </a>
          <div><img src={banner} className='Banner'/></div>
        </div>
        <div className='App-body'>
          <BubbleNavigator />
        </div>
      </div>
    );
  }
}

export default App;
