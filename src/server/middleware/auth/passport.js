import passport from 'koa-passport';
import path from 'path';
import Github from '../../../github/github-util';
var LocalStrategy = require('passport-local').Strategy;

let github = new Github();

export default function(app) {
  passport.use('local', new LocalStrategy(
    (username, password, done) => {

      console.log(`${username} - ${password}`);

      let credentials = {username: username, password: password};

      github.authenticate(credentials).then((token) => {

        if (token) {
          credentials.token = token;

          return done(null, credentials);
        }
        return done(null, false);
      });
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    let octo = new Octokat({
      token: user.token
    });

    user.octo = octo;

    done(null, user);
  });

  return passport;
}
