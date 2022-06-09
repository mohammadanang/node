const preStart = require('./pre-start');
// start env configuration run
preStart();

const server = require('@app/server');
const logger = require('@utils/logger');

const port = process.env.PORT || 8000;
const message = 'Server started on port: ';

const app = server.listen(port, () => {
  logger.log('appServer-listen', message + port, 'info');
});

/***********************************************************************************
 *                         Gracefully Shutdown
 **********************************************************************************/
process.on('SIGTERM', () => {
  logger.log(
    'appServer-SIGTERM',
    'SIGTERM signal received: closing HTTP server',
    'info'
  );
  app.close(() => {
    logger.log('appServer-SIGTERM', 'HTTP server closed', 'info');
  });
});

process.on('SIGINT', () => {
  logger.log(
    'appServer-SIGINT',
    'SIGINT signal received: closing HTTP server',
    'info'
  );
  app.close(() => {
    logger.log('appServer-SIGINT', 'HTTP server closed', 'info');
  });
});
