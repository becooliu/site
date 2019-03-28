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

//留言
const messageSchema = mongoose.Schema({
    mod: String,
    mod_items: Array
})

//关于我们
const aboutSchema = mongoose.Schema({
    mod: String,
    mod_title: String,
    mod_subtitle: String,
    mod_cover_img: String,
    mod_items: Array
})

//团队
const teamSchema = mongoose.Schema({
    mod: String,
    mod_title: String,
    mod_subtitle: String,
    members: Array
});

//用户
const usersSchema = mongoose.Schema({
    username: String,
    password: String,
    avatar: String,
    nick_name: String
})

const Models = {
    home: mongoose.model('homes', homeSchema),
    news: mongoose.model('news', newsSchema),
    company: mongoose.model('companies', companySchema),
    message: mongoose.model('messages', messageSchema),
    about: mongoose.model('abouts', aboutSchema),
    team: mongoose.model('teams', teamSchema),
    users: mongoose.model('users', usersSchema)
}

module.exports = Models;