import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as d3 from 'd3';

export default class BubbleNavigator extends Component {

  render() {
    return (
      <div>
      <svg width={1000} height={650}>
      <div id={'Media'} to={'/Media'} >
        <circle r={80} fill={'red'} />
        <text>Media</text>
      </div>
      </svg>
      </div>
    );
  }
}
