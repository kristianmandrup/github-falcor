export default function(app) {
  //Middleware: request logger
  function *reqlogger(next) {
    console.log('%s - %s %s',new Date().toISOString(), this.req.method, this.req.url);
    yield next;
  }
  app.use(reqlogger);
  return app;
}
