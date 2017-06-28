import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

class RadarComparison extends Component {
  displayName = 'RadarComparison';
  state = {companies: [],
    data: {
      labels: ['Overall', 'Culture and Values', 'Senior Leadership', 'Compensation and Benefits', 'Career Opportunities', 'Work-life Balance'],

    }
  };

  componentWillMount() {
    fetch('/api/companies')
      .then(res => res.json())
      .then(companies => this.setState({ companies }));
  }
  // getInitialState() {
  //   return { showChild: false };
  // }
  // _click() {
  //   this.setState({showChild: !this.state.showChild});
  // }
  render() {
    const company = this.state.companies[0];
    const data =  {
      labels: ['Overall', 'Culture and Values', 'Senior Leadership', 'Compensation and Benefits', 'Career Opportunities', 'Work-life Balance'],
      datasets: [
        'label': company.name,
        'backgroundColor': 'rgba(153,255,51,0.4)',
        'borderColor': 'rgba(153,255,51,1)',
        'data': [company.overallRating, company.cultureAndValuesRating, company.seniorLeadershipRating, company.compensationAndBenefitsRating, company.careerOpportunitiesRating, company.workLifeBalanceRating]
      ]
    };
    return (
      <div>
        <h2>Radar Example</h2>
        <button className='compare' onClick={this._click}>Show radar chart comparison</button>
        <Radar data={ data } />
      </div>
    );
  }
}

export default RadarComparison;
