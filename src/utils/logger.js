const winston = require('winston');
const config = winston.config;
const moment = require('moment');

const myConfig = {
  levels: {
    trace: 9,
    input: 8,
    verbose: 7,
    prompt: 6,
    debug: 5,
    info: 4,
    data: 3,
    help: 2,
    warn: 1,
    error: 0,
  },
};

let transports = [
  new winston.transports.Console({
    level: 'info',
    handleExceptions: true,
    colorize: true,
    timestamp: function () {
      return moment(new Date()).format();
    },
    formatter: function (opts) {
      return `${opts.timestamp()} [${config.colorize(
        opts.level,
        opts.level.toLowerCase()
      )} ]: 
        ${opts.message}`;
    },
  }),
];
if (process.env.NODE_ENV === 'production') {
  transports = [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ];
}

const logger = winston.createLogger({
  level: myConfig.levels,
  format: winston.format.json(),
  exitOnError: false,
  transports,
});

/**
 * Print log in the terminal for debuging support.
 *
 * @param {string} context - with format: {module}-{method}
 * @param {string} message
 * @param {string} scope - info, success, error, warn
 */
const log = (context, message, scope) => {
  const msg = `(${context}) - ${message}`;
  if (scope === 'error') {
    logger.error(msg);
  } else {
    logger.info(msg);
  }
};

module.exports = {
  log,
};
