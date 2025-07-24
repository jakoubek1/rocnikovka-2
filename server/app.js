const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const itemRouter = require('./routes/item');
const authRouter = require('./routes/Auth'); 
const reservationRouter = require('./routes/Reservation');
const searchRouter = require('./routes/Search');

const app = express();

mongoose
  .connect('mongodb+srv://admin:adminadmin@cluster0.eblkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Databáze připojena'))
  .catch((err) => console.error(' Chyba při připojení k DB:', err));

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5175', 'http://localhost:5176'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/item', itemRouter);
app.use('/auth', authRouter);
app.use('/reservation', reservationRouter);
app.use('/search', searchRouter);  


app.use((req, res, next) => {
  next(createError(404));
});


app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
