var expect = require('chai').expect;

describe('in-search-of-happiness homepage', function() {
  before(function() {
    browser.url('http://localhost:3000');
  });

  it('should have the industry sectors', ()=> {
    expect(browser.getText('#Media')).to.equal('Media');
  });

  it('menu items are animated', ()=> {
    const initialCX = browser.getAttribute('#Media', 'cx');
    expect(initialCX).to.not.equal(browser.getAttribute('#Media', 'cx'));
  });

  it('clicking on sector should load companies in sector', ()=> {
    browser.click('#media');
    expect(browser.getTagName('td')).to.include('BBC');
  });

  it('clicking on sector should not load companies outside of sector', ()=> {
    expect(browser.getTagName('td')).to.not.include('Intel Corporation');
  });

  it('should filter out a company with a rating of less than 3', ()=> {
    browser.elements('.rating').value.forEach( (object) => {
      expect(parseFloat(object.getText())).to.be.above(2.9);
    });
  });

  it('click on home should clear listed companies', ()=> {
    browser.click('#home');
    expect(browser.getHTML('#table')).to.not.include('<table>');
  });

});
