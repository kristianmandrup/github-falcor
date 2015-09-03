import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

export default function(app) {
  // configure middleware
  app.use(bodyParser());
  app.use(logger());
  return app;
}
