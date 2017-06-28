import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

class RadarComparison extends Component {
  displayName = 'RadarComparison';

  render() {
    let data = this.props.company;
    const comparisonData = {
      labels: ['Overall', 'Culture and Values', 'Senior Leadership', 'Compensation and Benefits', 'Career Opportunities', 'Work-life Balance'],
      datasets: [{
        backgroundColor: 'rgba(153,255,51,0.4)',
        borderColor: 'rgba(153,255,51,1)',
        data: [data.overallRating, data.cultureAndValuesRating, data.seniorLeadershipRating, data.compensationAndBenefitsRating, data.careerOpportunitiesRating, data.workLifeBalanceRating]
      }]
    };

    const options = {
      legend: {
        display: false
      },
      scale: {
        ticks: {
          min: 2,
          max: 5,
          stepSize: 0.5
        }
      }
    };

    return (
      <div>
        <Radar data={comparisonData} options={ options }/>
      </div>
    );
  }
}

export default RadarComparison;
