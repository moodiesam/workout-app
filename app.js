const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const exerciseRouter = require('./routes/excercise');
const routineRouter = require('./routes/routine');
const exercisetypeRouter = require('./routes/exercisetype');

const app = express();

require("dotenv").config();

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB=process.env.mongourl;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
};

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);

//API Routes
app.use('/api/users', usersRouter);
app.use('/api/exercises', exerciseRouter);
app.use('/api/routines', routineRouter);
app.use('/api/exercisetypes', exercisetypeRouter);

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend/build')));

  app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './', 'frontend', 'build', 'index.html')))
} else {
  app.get('/', (req, res) => res.send("Please set to productions"));
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(500).json({
    message: err.message,
    error: err
  });
});

module.exports = app;
