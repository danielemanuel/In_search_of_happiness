var expect = require('chai').expect;

describe('companies', function() {
  before(function() {
    browser.url('http://localhost:3000');
  });

  it("finds companies on the page", ()=> {
    expect(browser.getText('.App-body')).to.include("Expedia");
  });

  it("should display the overall rating on the page", ()=> {
    expect(browser.getText('.App-body')).to.include('4.3');
  });

  it("should filter out a company with a rating of less than 3", ()=> {
    browser.elements(".rating").value.forEach( (object) => {
      expect(parseFloat(object.getText())).to.be.above(2.9);
    });
  });

  it("should display website on the page", ()=> {
    expect(browser.getText('.website')).to.include('www.expedia.com');
  });

  it("should display industry on the page", ()=> {
    expect(browser.getText('.industry')).to.include('Internet');
  });

});
