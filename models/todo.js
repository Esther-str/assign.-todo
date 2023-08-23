const Joi = require('joi');
const mongoose= require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1000
  }
});

const Todo = mongoose.model('Todo', todoSchema);


function validateTodo(todo){
    const schema = {
      title: Joi.string().min(5).max(30).required(),
      description: Joi.string().min(5).max(1000).required(),
  };
  
  return Joi.validate(todo, schema);
  }

  exports.todoSchema= todoSchema;
  exports.Todo= Todo;
  exports.validate= validateTodo;
