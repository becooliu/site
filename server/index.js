'use strice'

const app = require('express')();
const bodyParser = require('body-parser')

const router = require('./home')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(router)

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
app.listen(8089);
console.log('success listen ......');
