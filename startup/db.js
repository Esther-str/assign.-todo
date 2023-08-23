const winston = require('winston');
const mongoose= require('mongoose');

module.exports= function () {
    mongoose.connect('mongodb://127.0.0.1:27017/todo')
  .then(() => winston.info('connected to Mongodb'));
}