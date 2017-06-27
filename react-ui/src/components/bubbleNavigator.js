import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export default class BubbleNavigator extends Component {

  render() {
    const Topic = ({ match }) => (
      <div>
        <h3>{'Hey'}</h3>
      </div>
    )
    return (
      <div>
      <Route path={'/Media'} component={Topic}/>
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
