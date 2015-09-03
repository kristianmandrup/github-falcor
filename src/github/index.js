'use strict';

import Octokat from 'octokat';
import util from './github_elements_util';
import request from 'request';
import path from 'path';

// require('./server');

/**
 * Util class to connect and manage Github server.
 *
 * @example
 * let Github = require( './src/github-graphql' );
 * let github = new Github();
 */
export default class Github {

  /*
   * Github user's authentication
   *
   * @example
   * github.authenticate({username: "freddyucv", password: "password"});
   *
   * @param {Object} credentials username and password
  */
  authenticate(credentials) {
    let credentialsFilePath = path.join(global.appRoot, 'config/credentials.js');
    let applicationCredentials = require(credentialsFilePath);

    let authData = `${credentials.username}:${credentials.password}`;
    let auth = `Basic ${new Buffer(authData).toString('base64')}`;
    let url = 'https://api.github.com/authorizations';

    return new Promise((resolve, reject) => {
      var options = {
        method: 'POST',
        url: 'https://api.github.com/authorizations',
        headers:
         {
           'content-type': 'application/json',
           authorization: auth,
           'User-Agent': 'server'
         },
        body:
         {
           'client_id': applicationCredentials.clientID,
           'client_secret': applicationCredentials.secret,
           scopes: ['public_repo', 'read:org'],
           note: 'admin script'
         },
        json: true};

      request(options, function(err, res, body) {
        if (err) {reject(err);}

        if (body.token) {
          let octo = new Octokat({
            token: body.token
          });

          resolve(octo.user.fetch().then(() => body.token, () => null));
        }else {
          return resolve(null);
        }
      });
    });
  }

  /**
   * Return organization
   *
   * @example
   * github.org('freddyucvTest').then((data) => console.log(data))
   *
   * @param {String} name Organization's name
   */
  /*org(name) {
    return this.octo.orgs(name)
      .fetch().then((org) => new Organization(org, this.octo));
  }*/

  userOrgs(userName, userLogged) {

    //TODO: delete when passport deserializeUser work
    if (!userLogged.octo) {
      userLogged.octo = new Octokat({
        token: userLogged.token
      });
    }

    return userLogged.octo.user.orgs.fetch()
      .then((orgs) => util('organization', orgs));
  }
};
