// var assert = require('assert');
// var chai = require('chai')
// var should = chai.should();
// var expect = chai.expect;
// var fetch = require('node-fetch');

// describe('webdriver.io page', function() {
//   it('should have the right title - the fancy generator way', function () {
//     browser.url('http://webdriver.io');
//     var title = browser.getTitle();
//     assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
//   });
//
//   it('All links should point to an existing page', ()=> {
//     browser.url('http://webdriver.io')
//     let links = browser.elements('a')
//
//     for (let i=0; i < links.value.length; i++) {
//       let link = links.value[i].ELEMENT,
//         href = browser.elementIdAttribute(link,'href'),
//         status = true
//
//       console.log(href.value)
//
//       fetch(href.value)
//         .then( function(res){
//         })
//         .catch( function(err){
//           status = false
//         })
//
//       expect(status).to.be.true;
//     }
//   });
// });
