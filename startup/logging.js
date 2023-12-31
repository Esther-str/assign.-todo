const winston= require('winston');
require('express-async-errors');

module.exports= function() {
    winston.exceptions.handle(
        new winston.transports.Console({ colorize: true, prettyPrint: true}),
        new winston.transports.File({ filename: 'UncaughtExceptions.log' }));
    
    process.on('unhandledRejection', (ex) => {
        throw ex;
    })

    winston.add(new winston.transports.File({
        filename: 'errors.log',
        handleExceptions: true
    }));
};