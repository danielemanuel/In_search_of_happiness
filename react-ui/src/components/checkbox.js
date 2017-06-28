import React, { Component } from 'react';


class Checkbox extends Component {

	constructor() {
		super();
		this.state = {
			isChecked: false,
			companyID: this.props.companyID,
		};
	}

	handleCheckbox(checkedState) {
		if (checkedState.checked) {
	      console.log(this.state.companyID);
	      this.setState({isChecked: true});
	    } else {
	      this.setState({isChecked: false});
	    }
	}

	render() {
		return (
			<input type="checkbox" onChange={() => this.handleCheckbox(this)}/>
		);
	}

}