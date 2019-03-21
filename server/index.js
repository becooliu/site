'use strice'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

//样板房模块
const home_example = require('./home');
app.use(home_example);

//news 模块
const api_news = require('./api_news');
app.use(api_news);

//公司模块
const api_company = require('./api_company');
app.use(api_company);

//留言模块
const api_message = require('./api_message');
app.use(api_message);

//关于我们
const api_about = require('./api_about');
app.use(api_about);




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
