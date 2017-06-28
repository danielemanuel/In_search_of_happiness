import React from 'react';

export default class CompanyData extends React.Component {
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
        <h2>{companySector} Companies</h2>
        <table className='ui structured large table'>
          <thead>
            <tr>
              <td>Company Name</td>
              <td>Glassdoor Rating</td>
              <td>Website</td>
              <td>Industry</td>
            </tr>
          </thead>
          <tbody>
            {companies.map(function(company){
              if (company.overallRating > '3.0' && company.sectorName === companySector) {
                return <tr key={company.companyID}>
                    <td>{company.name}</td>
                    <td className="rating">{company.overallRating}</td>
                    <td className="website"><a href={'http://'+company.website} target='_blank'>{company.website}</a></td>
                    <td className="industry">{company.industryName}</td>
                  </tr>;
              }
              return undefined;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
