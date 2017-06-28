import React, { Component } from 'react';
import logo from '../public/isoh-logo.png';
import Footer from './components/footer';
import './App.css';
import BubbleNavigator from './components/bubbleNavigator';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <br></br>
          <a href={'/'}>Home</a>
        </div>
        <div className='App-body'>
          <BubbleNavigator />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
