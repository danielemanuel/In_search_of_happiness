var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('host for one page app')
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})

module.exports = app;
