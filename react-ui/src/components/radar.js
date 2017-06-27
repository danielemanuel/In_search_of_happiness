import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';



class RadarComparison extends Component {
  displayName = 'RadarComparison';
  state = {companies: []}

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
    const companies = this.state.companies;
    console.log(companies);
    const data = {
      labels: ['Overall', 'Culture and Values', 'Senior Leadership', 'Compensation and Benefits', 'Career Opportunities', 'Work-life Balance'],
      datasets: [{
        label: companies[0].name,
        backgroundColor: 'rgba(153,255,51,0.4)',
        borderColor: 'rgba(153,255,51,1)',
        data: [12, 19, 3, 17, 28, 24]
      }]
    };
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
