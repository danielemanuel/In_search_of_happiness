import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

class RadarComparison extends Component {
  displayName = 'RadarComparison';
  constructor() {
    super();
    this.state = {companies: {}};
  }

  componentDidMount() {
    this.setState({companies: this.props.companies});
  }

  render() {
    const comparisonData = {
      labels: ['Overall', 'Culture and Values', 'Senior Leadership', 'Compensation and Benefits', 'Career Opportunities', 'Work-life Balance'],
      datasets: [{
        label: "Accenture",
        backgroundColor: 'rgba(153,255,51,0.4)',
        borderColor: 'rgba(153,255,51,1)',
        data: [12, 19, 3, 17, 28, 24]
      }]
    };
    return (
      <div>
        {console.log(this.state.companies)}
        <h2>Radar Example</h2>
        <Radar data={comparisonData}/>
      </div>
    );
  }
}

export default RadarComparison;
