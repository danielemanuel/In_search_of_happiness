import React, { Component } from 'react';
import logo from '../public/sun-banner.jpg';
import Table from './components/table';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      companies: [],
    };
  }

  componentWillMount() {
    fetch('/api/companies')
      .then(res => res.json())
      .then(companies => this.setState({ companies }));
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>In Search Of Happiness</h2>
        </div>
        <div className='App-body'>
          <h3>Companies</h3>
          <Table data={this.state.companies}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
