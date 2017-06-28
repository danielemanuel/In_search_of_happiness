import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

class RadarComparison extends Component {
  displayName = 'RadarComparison';
  state = {companies: [],
    data: {},
    company: undefined
  };

  componentDidMount() {
    fetch('/api/companies')
      .then(res => res.json())
      .then(companies => this.setState({ companies }))
      .then(companies => this.setState({ data: {
        labels: ['Overall', 'Culture and Values', 'Senior Leadership', 'Compensation and Benefits', 'Career Opportunities', 'Work-life Balance'],
        datasets: [{
          'label': companies[0].name,
          'backgroundColor': 'rgba(153,255,51,0.4)',
          'borderColor': 'rgba(153,255,51,1)',
          'data': [parseFloat(companies[0].overallRating), 2, 3, 4, 5, 6]
        }]
      }
      }));
  }

  render() {
    console.log(this.state.companies[0]);
    return (
      <div>
        <h2>Radar Example</h2>
        <button className='compare' onClick={this._click}>Show radar chart comparison</button>
        <Radar data={ this.state.data } />
      </div>
    );
  }
}

export default RadarComparison;
