const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our model
const Server = new Schema({
    name: String
});

// create the model class
const model = mongoose.model('server', Server);

// export the model
module.exports = model;
