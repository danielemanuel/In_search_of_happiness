import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';



class RadarComparison extends Component {
  displayName = 'RadarComparison';
  constructor(props) {
    super(props);
        this.state = {labels: [], datasets: []};
    // this.state = {isToggleOn: true};
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }
  
  // getInitialState() {
  //   return { showChild: false };
  // }
  // _click() {
  //   this.setState({showChild: !this.state.showChild});
  // }         <button className='compare' onClick={this._click}>Show radar chart comparison</button>

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
      <div>{console.log(this.companies)}
        <h2>Radar Example</h2>
        <Radar data={comparisonData}/>
      </div>
    );
  }
}

export default RadarComparison;
