var Browser = require("zombie");
var url = "http://localhost:5000/api/companies";
var browser = new Browser();

describe("testing with zombie", function() {

    it("should have defined headless browser", function(next){
      expect(typeof browser != "undefined").toBe(true);
      expect(browser instanceof Browser).toBe(true);
      next();
    });

    it("should visit the site", function(next) {
      browser.visit(url, function(err) {
        expect(browser.success).toBe(true);
        next();
        })
    });

    it("should see page content", function(next) {
      browser.visit(url, function(err) {
        expect(browser.html("body")).toContain("Internet")
        next();
      })
    });

});
