var expect = require('chai').expect;

describe('render chart canvas', function() {
  var browser;

  beforeEach(function() {
    browser.url('http://localhost:3000');
  });

  it('should render a chart when compare button is clicked', ()=> {
    browser.click('button.compare');
    expect(browser.getTagName('canvas')).to.exist;
  });

});