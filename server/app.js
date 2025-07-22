const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://admin:adminadmin@cluster0.eblkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log(' Databáze připojena'))
  .catch((err) => console.error(' Nelze se připojit:', err));

const indexRouter = require('./routes/index');
const itemRouter = require('./routes/item');
const authRouter = require('./routes/auth');

const app = express();


app.use(cors());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/item', itemRouter);
app.use('/api', authRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
