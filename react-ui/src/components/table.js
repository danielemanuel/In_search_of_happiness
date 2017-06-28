import React, { Component } from 'react';
import Company from './company';

class Table extends Component {
  displayName = 'Table';

  render() {
    return (	
      <table className='ui structured large table'>
        <thead>
          <tr>
          	<td> </td>
            <td> </td>
            <td>Company Name</td>
            <td>Glassdoor Rating</td>
            <td>Website</td>
            <td>Industry</td>
          </tr>
        </thead>
        <tbody>
        {this.props.data.slice(0, 6).map((company) => {
          console.log(company);
          if (company.overallRating > '3.0') {
            return (<Company data={company}/>);
          }
        })}
        </tbody>
      </table>
    );
  }
}

export default Table;