'use strice'

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const home_example = require('./home')
app.use(home_example)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))


app.use('*', function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  next()
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})
app.listen(8088);
console.log('success listen port 8088......');
