'use strict';

import mount from 'koa-mount';
import path from 'path';
// import { falcor } from 'falcor'; // some kinda Falcor import here!

export default function(app) {
  let schemaPath = path.join(app.rootPath, 'src/graphql/schemas');
  let schema = require(schemaPath);

  // mount Falcor Router on graph route
  let graphServer = mount('/graph',
    function*() {
      let query = this.query.query;

      let ctx = this;
      let user = this.session.passport.user;

      // do some falcor magic!
      // yield falcor(schema, query, user).
      //   then(data => {ctx.body = data;});
    }
  );

  return graphServer;
}
