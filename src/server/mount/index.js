import graph from './graph';

export default function(app) {
  app.use(graph(app));
  return app;
}
