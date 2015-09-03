const routers = ['public', 'secured'];

export default function(app) {
  app.routers = {};
  for (let name of routers) {
    app.routers[name] = require(`./${name}-router`)(app);
  }
  return app;
}
