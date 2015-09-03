const path = require('path');
const serve = require('koa-static');

export default function(app) {
  // Serve the frontend
  let staticPath = path.join(app.rootPath, 'public');
  app.use(serve(staticPath));
  return app;
}
