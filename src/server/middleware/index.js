const mws = ['basic', 'logger', 'errors', 'routers', 'static', 'session', 'authentication'];

let mwMap = {};
for (let mw of mws) {
  mwMap[mw] = require(`./${mw}-mw`);
}

export default function(app) {
  for (let name of mws) {
    mwMap[name](app);
  }
}
