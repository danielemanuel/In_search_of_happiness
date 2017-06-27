import React, { Component } from 'react';
import logo from '../public/isoh-logo.png';
import BubbleExample from './components/bubble';
import RadarExample from './components/radar';
import './App.css';

class App extends Component {
  state = {companies: []}

  componentDidMount() {
    fetch('/api/companies')
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
          <BubbleExample/>
          <RadarExample/>
          <table className='ui structured large table'>
            <thead>
              <tr>
                <td></td>
                <td>Company Name</td>
                <td>Glassdoor Rating</td>
                <td>Website</td>
                <td>Industry</td>
              </tr>
            </thead>
            <tbody>
            {this.state.companies.map(function(company){
              if (company.overallRating > "3.0") {
                return <tr>
                  <td><img src={company.squareLogo} height='50'></img></td>
                  <td>{company.name}</td>
                  <td className="rating">{company.overallRating}</td>
                  <td className="website"><a href={"http://"+company.website} target="_blank">{company.website}</a></td>
                  <td className="industry">{company.industryName}</td>
                  </tr>
              }
            }
            )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
