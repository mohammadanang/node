const { Router } = require('express');
const router = Router();
const logger = require('@utils/logger');
const { getAll } = require('../usecase/usecase');
const { routeVersioning } = require('@utils/constants');
const { success, error } = require('@utils/wrapper');
const { OK, BAD_REQUEST } = require('http-status-codes');

/**
 * Module information and route paths 
 */
const moduleName = 'home';
const rootPath = `/${moduleName}/${routeVersioning.V1}`;
const paths = {
    get: '/'
};

/***********************************************************************************
 *                         Route lists
 **********************************************************************************/
router.get(paths.get, (_req, res) => {
    try {
        const result = getAll();

        logger.log(`${moduleName}-getAll`, 'Loaded data home successfully', 'success');
        return res.send(success(OK, 'Home page successfully created', result));
    } catch(e) {
        logger.log(`${moduleName}-getAll`, e.message, 'error');
        return res.send(error(BAD_REQUEST, e.message));
    }
});


module.exports = {
    path: rootPath,
    moduleName,
    router,
};