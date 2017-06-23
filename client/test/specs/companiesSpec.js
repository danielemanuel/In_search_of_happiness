var expect = require('chai').expect;

describe('companies', function() {
  before(function() {
    browser.url('http://localhost:3000');
  });

  it("finds overall rating on the page", ()=> {
    expect(browser.getText('.App-body')).to.include("Expedia");
    // expect(browser.getText('.App-body')).to.not.include("ION Trading");
    // expect(browser.getText('.App-body')).to.not.include("Capita");
  });

});
