const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/site', {useNewUrlParser: true});

const db = mongoose.connection;
db.once('error' , () => console.log('database connect error .'));
db.once('open' , () => console.log('mongo connect success.'));

//样板房
const homeSchema = mongoose.Schema({
    //example_title: { type: Array, default: 'undefined'},
    mod: String,
    example_title: String,
    example_subtitle: String,
    example_item: Array
})

//新闻
const newsSchema = mongoose.Schema({
    mod: String,
    mod_title: String,
    mod_subtitle: String,
    mod_items: Array
})

//公司信息
const companySchema = mongoose.Schema({
    mod: String,
    mod_items: Array
})

const Models = {
    home: mongoose.model('homes', homeSchema),
    news: mongoose.model('news', newsSchema),
    company: mongoose.model('companies', companySchema)
}

module.exports = Models;