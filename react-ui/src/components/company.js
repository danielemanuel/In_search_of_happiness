import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Table from './table';

class Company extends Component {
  displayName = 'Company';
  render() {
    return (
      <div id={'CompanyData'}>
        <Route path="/charts/:companyID" component={Table} />
        <tr key={this.props.data.companyID}>
        <td className='logo'><img src={this.props.data.squareLogo} alt={this.props.data.name + ' Logo'}></img></td>
          <Link id={this.props.data.name} to={'/charts/' + this.props.data.companyID}>
          <td className='name'>{this.props.data.name}</td>
          </Link>
        <td className='rating'>{this.props.data.overallRating}</td>
        <td className='website'><a href={'http://'+this.props.data.website} target='_blank'>{this.props.data.website}</a></td>
        <td className='industry'>{this.props.data.industryName}</td>
        </tr>
      </div>
    );
  }
}

export default Company;
