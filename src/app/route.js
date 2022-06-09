const { Router } = require('express');
const textV1 = require('@modules/text/v1/delivery/route_handler');
const imageV1 = require('@modules/image/v1/delivery/route_handler');
const homeV1 = require('@modules/home/v1/delivery/route_handler');
const aboutV1 = require('@modules/about/v1/delivery/router_handler');
const contactV1 = require('@modules/contact/v1/delivery/router_handler');
const apiRouter = Router();

apiRouter.use(textV1.path, textV1.router);
apiRouter.use(imageV1.path, imageV1.router);
// add new routes here ...
apiRouter.use(homeV1.path, homeV1.router);
apiRouter.use(aboutV1.path, aboutV1.router);
apiRouter.use(contactV1.path, contactV1.router);

module.exports = apiRouter;
