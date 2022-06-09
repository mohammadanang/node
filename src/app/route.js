const { Router } = require('express');
const homeV1 = require('@modules/home/v1/delivery/route_handler');
const aboutV1 = require('@modules/about/v1/delivery/router_handler');
const contactV1 = require('@modules/contact/v1/delivery/router_handler');
const apiRouter = Router();

// add new routes here ...
apiRouter.use(homeV1.path, homeV1.router);
apiRouter.use(aboutV1.path, aboutV1.router);
apiRouter.use(contactV1.path, contactV1.router);

module.exports = apiRouter;
