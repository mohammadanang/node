const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
require('express-async-errors');
const app = express();
const logger = require('@utils/logger');
const apiRoutes = require('./route');
const validate = require('@config/env/validate');

const { BAD_REQUEST } = require('http-status-codes');

/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/
// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

validate(); // env value validation

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

app.use('/api', apiRoutes);

/***********************************************************************************
 *                                  Express error handling
 **********************************************************************************/
app.use((_err, req, res, _next) => {
  const errMsg = `HTTP server get errors when call: ${req.originalUrl}`;
  logger.log('server-errorHandling', errMsg, 'error');

  res.status(BAD_REQUEST).send({
    code: BAD_REQUEST,
    error: true,
    message: errMsg,
  });
});

module.exports = app;
