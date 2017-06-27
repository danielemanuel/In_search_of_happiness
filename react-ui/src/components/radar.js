import React from 'react';
import {Radar} from 'react-chartjs-2';

// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/company-test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

var data = {
    labels: ["Leadership", "Work-life balance", "Community", "Pay", "Career progression", "Something", "Something"],
    datasets: [{
        label: 'Accenture',
        backgroundColor: "rgba(153,255,51,0.4)",
        borderColor: "rgba(153,255,51,1)",
        data: [12, 19, 3, 17, 28, 24, 7]
    }, {
        label: 'Deloitte',
        backgroundColor: "rgba(255,153,0,0.4)",
        borderColor: "rgba(255,153,0,1)",
        data: [30, 29, 5, 5, 20, 3, 10]
    }, {
        label: 'Microsoft',
        backgroundColor: "rgba(153,99,51,0.4)",
        borderColor: "rgba(153,255,51,1)",
        data: [19, 5, 3, 17, 18, 24, 12]
    } ]
};

// mongoose.disconnect();

export default React.createClass({
  displayName: 'RadarExample',
  getInitialState: function () {
    return { showChild: false };
  },
  _click: function() {
    this.setState({showChild: !this.state.showChild});
  },
  render() {
    return (
      <div>
        <h2>Radar Example</h2>
        <button className="compare" onClick={this._click}>Show radar chart comparison</button>
        {this.state.showChild ? <Radar data={data} /> : null}
      </div>
    );
  }
});

