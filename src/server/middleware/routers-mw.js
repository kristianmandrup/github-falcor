export default function(app) {
  // mount the routers
  for (let name in app.routers) {
    let router = app.routers[name];
    app.use(router.middleware());
  }
  return app;
}
