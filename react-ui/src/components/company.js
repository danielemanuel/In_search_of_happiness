import React, { Component } from 'react';
import Checkbox from './checkbox';
import RadarComparison from './radar';

class Company extends Component {
  displayName = 'Company';
	render() {
		const data = this.props.data;
		return (	
		  <tr key={data.companyID}>
		      <td className='logo'><img src={data.squareLogo} alt={data.name + ' Logo'}></img></td>
		      <td className='name'>{data.name}</td>
		      <td className='rating'>{data.overallRating}</td>
		      <td className='website'><a href={'http://'+data.website} target='_blank'>{data.website}</a></td>
		      <td className='industry'>{data.industryName}</td>
		      <td><RadarComparison company={data}/></td>
		  </tr>
		);
	}
}

export default Company;

