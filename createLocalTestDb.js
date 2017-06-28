var http = require('http');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/company-test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var companySchema = mongoose.Schema({
  companyID: Number,
  name: String,
  website: String,
  squareLogo: String,
  overallRating: String,
  cultureAndValuesRating: String,
  seniorLeadershipRating: String,
  compensationAndBenefitsRating: String,
  careerOpportunitiesRating: String,
  workLifeBalanceRating: String,
  recommendToFriendRating: String,
  sectorName: String,
  industryName: String });
var Company = mongoose.model('Company', companySchema);


var apiURL = function(params) {
  return 'http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=163516&t.k=fxjVIKjFddO&action=employers&country='
    + params['country'] +
    '&q='
    + params['query'] +
    '&pn='
    + params['page'] +
    '&userip=192.168.43.42&useragent=Mozilla/%2F4.0';
};

var total = [];
for (var i = 1; i < 50; i ++){
  http.get(apiURL({'country': 'uk', 'query': 'software', 'page': i}), function(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      total.push(JSON.parse(body).response.employers);
    });
  }).on('error', function(e) {
    console.log('Got error: ' + e.message);
  });
}
setTimeout(function() {
  var data = total.reduce( function(a, b) {
    return a.concat(b);
  },
    []
  );
  data.forEach(function(object){

    var company = new Company({
      companyID: object['id'],
      name: object.name,
      website: object.website,
      squareLogo: object.squareLogo,
      overallRating: object.overallRating,
      cultureAndValuesRating: object.cultureAndValuesRating,
      seniorLeadershipRating: object.seniorLeadershipRating,
      compensationAndBenefitsRating: object.compensationAndBenefitsRating,
      careerOpportunitiesRating: object.careerOpportunitiesRating,
      workLifeBalanceRating: object.workLifeBalanceRating,
      recommendToFriendRating: object.recommendToFriendRating,
      sectorName: object.sectorName,
      industryName: object.industryName });

    company.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log(company.name);
      }
    });
  });
}, 2000)

setTimeout(function() {
  mongoose.disconnect();
}, 5000);
