import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export default class BubbleNavigator extends Component {

  render() {
    return (
      <div>
      <Route path={'/Media'} />
      <svg width={1000} height={650}>
      <Link id={'Media'} to={'/Media'} >
        <circle r={80} fill={'red'} />
        <text>Media</text>
      </Link>
      </svg>
      </div>
    );
  }
}
