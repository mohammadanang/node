const envValue = require('@config/env/index');
const logger = require('@utils/logger');

const validate = () => {
  if(!envValue.APP_URL) {
    logger.log('env-validate', 'APP_URL env value not set yet!');
    process.exit();
  }
};

module.exports = validate;
