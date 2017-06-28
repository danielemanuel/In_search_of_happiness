import React, { Component } from 'react';
import Radar from './radar';

class CompareControl extends Component {
  constructor(props) {
    super(props);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.state = {isCharted: false, companyID: props.company};
  }

  handleCheckbox(checkedState) {
    if (checkedState.checked) {
      console.log(this.state.companyID);
      this.setState({isCharted: true});
    } else {
      this.setState({isCharted: false});
    }
  }

  render() {
    const isCharted = this.state.isCharted;

    let chart = null;
    if (isCharted) {
      chart = <Radar data={this.state.companyID}/>;
    } else {
      // Remove data points from chart
    }
    return (
      <div>
        <input type="checkbox" name="compare" onchange={this.handleCheckbox(this)}/>
        {chart}
      </div>
    );
  }
}

export default CompareControl;