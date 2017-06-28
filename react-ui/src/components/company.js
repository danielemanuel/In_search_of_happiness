import React, { Component } from 'react';
import Checkbox from './checkbox';

class Company extends Component {
  displayName = 'Company';
	render() {
		return (	
		  <tr key={this.props.data.companyID}>
		      <td></td>
		      <td className='logo'><img src={this.props.data.squareLogo} alt={this.props.data.name + ' Logo'}></img></td>
		      <td className='name'>{this.props.data.name}</td>
		      <td className='rating'>{this.props.data.overallRating}</td>
		      <td className='website'><a href={'http://'+this.props.data.website} target='_blank'>{this.props.data.website}</a></td>
		      <td className='industry'>{this.props.data.industryName}</td>
		  </tr>
		);
	}
}

export default Company;

