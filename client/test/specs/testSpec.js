var assert = require('assert');
var should = require('chai').should();
var expect = require('chai').expect;
var fetch = require('node-fetch');


describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });

    it('does "What-is-WebdriverIO" link exist?', ()=> {
        browser.url('http://webdriver.io')
        browser.getText('#What-is-WebdriverIO').should.be.equal('What is WebdriverIO?')
    });

    it('should have the site title', ()=> {
        browser.url('http://localhost:3000')
        browser.getText('.App-header h2').should.be.equal('In Search Of Happiness')
    });

    it

    it('All links should point to an exsiting page', ()=> {
        browser.url('http://webdriver.io')
        let links = browser.elements('a')

        for (let i=0; i < links.value.length; i++) {
          let link = links.value[i].ELEMENT,
              href = browser.elementIdAttribute(link,'href'),
              status = true

          console.log(href.value)

          fetch(href.value)
            .then( function(res){
            })
            .catch( function(err){
              status = false
            })

          expect(status).to.be.true;
        }
    });
});
