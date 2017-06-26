var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');
chai.use(require('chai-image-assert')(__dirname));

describe("social media icons", ()=> {
  before(() => {
    browser.url('http://localhost:3000');
  });

it('displays facebook logo', () => {
  var myLogo = fsReadFileSync(path.join('https://www.glassdoor.co.uk/Reviews/Facebook-Reviews-E40772.htm'));
  expect(browser.myLogo).to.matchImage('facebook')
});

});
