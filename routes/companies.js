var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/company-test");

var companySchema = mongoose.Schema({
  companyID: Number,
  name: String,
  website: String,
  squareLogo: String,
  overallRating: String,
  sectorName: String,
  industryName: String
});
var Company = mongoose.model('Company', companySchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  Company.find()
      .then(function(records) {
        res.json(records)
      });
});

module.exports = router;
