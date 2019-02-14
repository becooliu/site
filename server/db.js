const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/site', {useNewUrlParser: true});

const db = mongoose.connection;
db.once('error' , () => console.log('database connect error .'));
db.once('open' , () => console.log('mongo connect success.'));

const homeSchema = mongoose.Schema({
    //example_title: { type: Array, default: 'undefined'},
    example: String
})

const home_models = {
    home: mongoose.model('home', homeSchema)
}

module.exports = home_models;