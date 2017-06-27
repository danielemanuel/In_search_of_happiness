import React from 'react';
import {Bubble} from 'react-chartjs-2';

const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'Finance',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      data: [{x:10,y:10,r:12}]
    }, {
      label: 'Legal',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      data: [{x:8,y:15,r:9}]
    }, {
      label: 'Software',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      data: [{x:12,y:6,r:14}]
    }, {
      label: 'Hardware',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      data: [{x:15,y:7,r:7}]
    }, {
      label: 'Government',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      data: [{x:10,y:9,r:15}]
    } 
  ],
  options: {
    scales: {
      xAxes: [{
                  gridLines: {
                      display:false
                  }
              }],
      yAxes: [{
                  gridLines: {
                      display:false
                  }   
              }]
      },
    events: ['click']
  }
};

export default React.createClass({
  displayName: 'BubbleExample',
  getInitialState: function () {
    return { showChild: false };
  },
  _click: function() {
    this.setState({showChild: !this.state.showChild});
  },
  render() {
    return (
      <div>
        <h2>Bubble Example</h2>
        <button onClick={this._click}>Pick an industry</button>
        {this.state.showChild ? <Bubble data={data} /> : null}
      </div>
    );
  }
});