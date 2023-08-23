const express = require('express');
const auth = require('../routes/auth');
const users= require('../routes/users');
const todos = require('../routes/todos');
const error = require('../middleware/error');


module.exports = function(app) {
    app.use(express.json()); //req.body
    //app.use(express.urlencoded({ extended: true})); //keyvalue=valu&key=value
    // app.use(express.static('public'));
    // app.use(helmet());
    app.use('/api/auth', auth);
    app.use('/api/users', users);
    app.use('/api/todos', todos);
    app.use(error);
}