
import passportConfig from './auth/passport';
import _ from 'koa-route';

export default function(app) {
  var passport = passportConfig(app);

  app.use(passport.initialize());
  app.use(passport.session());

  /*const config = {
    redirects: {successReturnToOrRedirect: '/', failureRedirect: '/'},
    scopes: {scope: ['user', 'repo']}
  };*/

  app.use(_.get('/login', function*(next) {
    var ctx = this;

    yield passport.authenticate('local', function*(err, user, info) {
      if (err) {throw err;}

      if (user === false) {
        ctx.status = 401;
        ctx.body = {success: false};
      } else {
        yield ctx.login(user);
        ctx.body = {success: true};
      }
    }).call(this, next);
  }));
}
