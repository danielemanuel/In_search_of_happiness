import React, { Component } from 'react';
import RadarComparison from './radar';

class Company extends Component {
  displayName = 'Company';
  render() {
    const data = this.props.data;
    return (
     <tr key={data.companyID}>
        <td className='logo'>
          <a href={'http://'+data.website} target='_blank'>
            <img src={data.squareLogo} alt={data.name + ' Logo'} className="companyLogo"></img>
          </a>
        </td>
        <td className='name'>{data.name}</td>
        <td className='rating'>{data.overallRating}</td>
        <td className='industry'>{data.industryName}</td>
        <td className='radar'><RadarComparison company={data}/></td>
    </tr>
    );
  }
}

export default Company;
