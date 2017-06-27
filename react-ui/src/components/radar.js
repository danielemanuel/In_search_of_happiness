import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

class RadarComparison extends Component {
  displayName = 'RadarComparison';
  state = {companies: [],
    data: {
      labels: ['Overall', 'Culture and Values', 'Senior Leadership', 'Compensation and Benefits', 'Career Opportunities', 'Work-life Balance'],
      datasets: []
    }
  };

  componentWillMount() {
    fetch('/api/companies')
      .then(res => res.json())
      .then(companies => this.setState({ companies }));

    this.state.companies.slice(0, 1).forEach(function(company){
      this.state.data.datasets.push({
        'label': company.name,
        'backgroundColor': 'rgba(153,255,51,0.4)',
        'borderColor': 'rgba(153,255,51,1)',
        'data': [company.overallRating, company.cultureAndValuesRating, company.seniorLeadershipRating, company.compensationAndBenefitsRating, company.careerOpportunitiesRating, company.workLifeBalanceRating]
      });
    });

  }
  // getInitialState() {
  //   return { showChild: false };
  // }
  // _click() {
  //   this.setState({showChild: !this.state.showChild});
  // }
  render() {
    const data = this.state.data;
    return (
      <div>
        <h2>Radar Example</h2>
        <button className='compare' onClick={this._click}>Show radar chart comparison</button>
        <Radar data={data} />
      </div>
    );
  }
}

export default RadarComparison;
