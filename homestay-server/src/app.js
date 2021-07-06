var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
import { authenticate } from './middlewares/authentication';
import generalErrorHandler from './middlewares/generalErrorHandler';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(function(req, res) {
    app.status(404).json({error: 'Page not found'});
})
app.use(generalErrorHandler);
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal Server Error!');
});
module.exports = app;
