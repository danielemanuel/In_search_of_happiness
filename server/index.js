const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/company-test');

const companySchema = mongoose.Schema({
  companyID: Number,
  name: String,
  website: String,
  squareLogo: String,
  overallRating: String,
  sectorName: String,
  industryName: String
});

const Company = mongoose.model('Company', companySchema);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api/companies', function (req, res) {
  res.set('Content-Type', 'application/json');
  Company.find()
    .then(function(records) {
      res.json(records);
    });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
