const winston = require('winston');

module.exports = function(err, req, res, next){ //4 parameters err which catch the error
    // Log the exception

    winston.error(err.message, err);

    //error
    //warn
    //info
    //verbose
    //debug
    //silly

    res.status(500).send('Something Failed.'); //500 Internal error
  }