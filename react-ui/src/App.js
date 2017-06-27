import React, { Component } from 'react';
import logo from '../public/sun-banner.jpg';
import './App.css';
import BubbleNavigator from './components/bubbleNavigator'

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
          <BubbleNavigator />
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
              return null;
            }
            )}
            <div className='footer'>
              <a href='https://www.glassdoor.co.uk/index.htm' className='link'>powered by <img alt='glassdoor-api-logo' src='https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png' title='Job Search' /></a>
            </div>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
