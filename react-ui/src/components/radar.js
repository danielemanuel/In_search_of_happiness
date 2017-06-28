import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

class RadarComparison extends Component {
  displayName = 'RadarComparison';

  render() {
    let data = this.props.company;
    const comparisonData = {
      labels: ['Overall', 'Culture and Values', 'Senior Leadership', 'Compensation and Benefits', 'Career Opportunities', 'Work-life Balance'],
      datasets: [{
        label: data.name,
        backgroundColor: 'rgba(153,255,51,0.4)',
        borderColor: 'rgba(153,255,51,1)',
        data: [data.overallRating, data.cultureAndValuesRating, data.seniorLeadershipRating, data.compensationAndBenefitsRating, data.careerOpportunitiesRating, data.workLifeBalanceRating]
      }]
    };
    return (
      <div>
        <Radar data={comparisonData}/>
      </div>
    );
  }
}

export default RadarComparison;
