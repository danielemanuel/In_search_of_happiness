import React, { Component } from 'react';
import './App.css';
import BubbleNavigator from './components/bubbleNavigator';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>In Search of Happiness</h1>
        <a href={'/'}>Home</a>
        <BubbleNavigator />
      </div>
    );
  }
}
