import React, { Component } from 'react';

import logo from '../public/isoh-logo.png';
import RadarComparison from './components/radar';
import Table from './components/table';
import Footer from './components/footer';
import './App.css';
import BubbleNavigator from './components/bubbleNavigator';


class App extends Component {

  constructor() {
    super();
    this.state = {
      companies: [],
    };
  }

  componentDidMount() {
    fetch('/api/companies')
      .then(res => res.json())
      .then(companies => this.setState({ companies }));
  }

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
        <RadarComparison companies={this.state.companies}/>
      </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
