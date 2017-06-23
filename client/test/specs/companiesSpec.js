var expect = require('chai').expect;

describe('companies', function() {
  before(function() {
    browser.url('http://localhost:3000');
  });

  it("finds companies on the page", ()=> {
    expect(browser.getText('.App-body')).to.include("Expedia");
  });

  it("should see the overall rating on the page", ()=> {
    expect(browser.getText('.App-body')).to.include('4.3');
  });

  it("should filter out a company with a rating of less than 3", ()=> {
    expect(parseInt(browser.getText('.rating'))).to.be.above(2.9);
  });

  it("see website on the page", ()=> {
    expect(browser.getText('.App-body')).to.include('www.expedia.com')
  });

});
