import React, { Component } from 'react';


class Checkbox extends Component {

	constructor() {
		super();
		this.state = {
			isChecked: false,
			company: {},
		};
	}

	handleCheckbox(checkedState) {
		if (checkedState.checked) {
	      console.log("checked");
	      //this.setState({isChecked: true});
	    } else {
	      //this.setState({isChecked: false});
	    }
	}

	render() {
		//this.setState({company: this.props.company});
		return (
			<input type="checkbox" onChange={() => this.handleCheckbox(this)}/>
		);
	}
}

export default Checkbox;