import React, { Component } from 'react';
import logo from '../public/sun-banner.jpg';
import './App.css';
import BarChart from './BarChart.js'

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
          <h2>d3ia dashboard</h2>
          <div>
            <BarChart data={[5,10,1,3]} size={[500,500]} />
          </div>
        </div>
        <div className="App-body">
          <h3>Companies</h3>
          <table className='ui structured large table'>
            <thead>
              <tr>
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
