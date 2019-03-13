const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/site', {useNewUrlParser: true});

const db = mongoose.connection;
db.once('error' , () => console.log('database connect error .'));
db.once('open' , () => console.log('mongo connect success.'));

const homeSchema = mongoose.Schema({
    //example_title: { type: Array, default: 'undefined'},
    mod: String,
    example_title: String,
    example_subtitle: String,
    example_item: Array
})

const Models = {
    home: mongoose.model('homes', homeSchema)
}

module.exports = Models;