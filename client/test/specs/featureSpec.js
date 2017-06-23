var expect = require('chai').expect;

describe('in-search-of-happiness homepage', function() {
  before(function() {
    browser.url('http://localhost:3000');
  });

  it('should have the page title', ()=> {
    expect(browser.getText('.App-header h2')).to.equal('In Search Of Happiness');
  });

  it('should have a list of companies', ()=> {
    expect(browser.getTagName('tr').length).to.be(101);
  });

  it('should not have empty list elements', ()=> {
    expect(browser.getTagName('tr')[5].innerHTML).to.not.equal('');
  });

  it("can filter out companies with an overall rating less than three stars", ()=> {
    expect(browser.getText('.App-body')).to.not.include("ION Trading");
    expect(browser.getText('.App-body')).to.not.include("Capita");
  });

});
