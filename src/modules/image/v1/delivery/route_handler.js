const { Router } = require('express');
const router = Router();
const logger = require('@utils/logger');
const { getUrl } = require('../usecase/usecase');
const { routeVersioning } = require('@utils/constants');
const { success, error } = require('@utils/wrapper');
const { OK, BAD_REQUEST } = require('http-status-codes');

/**
 * Module information and route paths.
 */
const moduleName = 'image';
const rootPath = `/${moduleName}/${routeVersioning.V1}`;
const paths = {
  get: '/'
};

/***********************************************************************************
 *                         Route lists
 **********************************************************************************/
router.get(paths.get, (_req, res) => {
  try {
    const result = getUrl();
  
    logger.log(`${moduleName}-getUrl`, 'Get image url successfully', 'success');
    return res.send(success(OK, 'Get image url successfully', result));
  } catch(e) {
    logger.log(`${moduleName}-getUrl`, e.message, 'error');
    return res.send(error(BAD_REQUEST, e.message));
  }
});

module.exports = {
  path: rootPath,
  moduleName,
  router,
};
