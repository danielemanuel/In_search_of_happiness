var expect = require('chai').expect;

describe('render chart canvas', function() {
  browser.url('http://localhost:3000');

  it('should render a chart on page load', ()=> {
    expect(browser.getTagName('canvas')).to.exist;
  });

});
