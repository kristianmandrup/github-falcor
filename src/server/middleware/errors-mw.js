export default function(app) {
  // Custom 404
  app.use(function*(next) {
    yield next;
    if (this.body || !this.idempotent) {
      return;
    }
    this.status = 404;
  });
  return app;
}
