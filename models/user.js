const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  }
  
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
  return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = {
    email: Joi.string().min(5).max(100).required().email(),
    password: Joi.string().min(5).max(100).required()
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
