import React, { Component } from 'react';
import Company from './company';

class Table extends Component {
  state = {companies: []}

  componentDidMount() {
    fetch('/api/companies')
      .then(res => res.json())
      .then(companies => this.setState({ companies }));
  }

  render() {
    const companies = this.state.companies;
    const companySector = this.props.match.params.sector;

    return (
      <div id={'companyData'}>
        <h4 id='sector'>{companySector} Companies</h4>
        <br></br>
        <table className='ui structured large table'>
          <thead>
            <tr>
              <td>Site</td>
              <td>Company Name</td>
              <td>Overall Rating</td>
              <td id='Industry-col'>Industry</td>
              <td>Company Ratings</td>
            </tr>
          </thead>
          <tbody>
          {companies.map((company) => {
            if (company.overallRating > '3.0' && company.sectorName === companySector) {
              return (<Company data={company}/>);
            }
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
