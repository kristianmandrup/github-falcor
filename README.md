Github-Falcor
=============

[![Greenkeeper badge](https://badges.greenkeeper.io/kristianmandrup/github-falcor.svg)](https://greenkeeper.io/)

FalcorJS server for Github API

### Testing

Run: `gulp test`

### Credentials

Credentials may configured in `config/credentials.js` it contains a sample file.

### Octokat

Use [Octokat.js](https://github.com/philschatz/octokat.js) DSL for easy use of Github API.

Installation
============

Install node packages required

`npm install`

...

### Specs

FalcorJS github API wrapper http://netflix.github.io/falcor/ Specs for phase 1 Create a simple app using falcor-express (or koa) with octokat.js that can deliver the following:

Get first 2 repos for [username], name and description only

`.get(["user", "sophiya"], ["repos", {from: 0, to: 2}, ["name", "description"]])`

List Teams GET /repos/:owner/:repo/teams / Get repo info including teams who have access to (are working on) this repo, team.name only

```sh
.get(["user", "sophiya"], ["repos", {from: 0, to: 2}, ["name", "description", "teams"], ["name"]])

=> { ‘0’: { name: zzz description: yyy teams: { ‘0’: { name: xxx }, ... } }, ‘1’: { … // another repo }, ‘2’: { … // another repo }] Organizations https://developer.github.com/v3/orgs/
```

### Get User Organizations

GET /user/orgs

```sh
.get(["user", "sophiya"], ["organisations"])
=> list of organizations (full json) which user belongs to
```

```sh
.get(["user", "sophiya"], ["organisations"], ["name", "description"])

=> "description": "A great organization", "name": "github",
```

### Search repos by name

Router: `pathSet: "repos.byName[{keys}]['description']"`

Query: `model .get(["repos", "byName", ["falcor"], ['description']])`

Should match repos on partial name match, ie. for an auto-complete box scenario ;) Non-functional Requirements https://github.com/philschatz/octokat.js https://www.npmjs.com/package/falcor-koa

### Project layout

Starting project layout https://github.com/kristianmandrup/falcor-create-demo/

Use babel.io project setup to enable ES6 and ES7 constructs (generators, async functions etc.) https://github.com/babel/generator-babel-boilerplate

This project has been configured for Koa, with Redis Session and more and should act as a good foundation. Remove any GraphQL logic.  Project must use EcmaScript 6 Generators for Octokat

This requires Node.js 0.12.7 with the `--harmony-generators` flag Or better yet, use IOjs. 3.x

```js
var Octokat = require('octokat');
var octo = new Octokat();

var zen  = yield octo.zen.read();
var info = yield octo.repos('philschatz', 'octokat.js').fetch();

console.log(zen);
```

### Github authorizations

The app must use Github authorizations API to get access to the users github repos with specific scope access as required.

https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app

### Koa Knowledge base

Koa getting started http://www.zev23.com/2014/03/koajs-getting-started_5248.html

Koa router http://www.zev23.com/2014/03/koajs-tutorial-routing.html

Koa github authentication via Passport and Oauth2 http://www.zev23.com/2014/03/koajs-tutorial-authenticate-with_7.html http://www.zev23.com/2014/03/koajs-tutorial-authenticate-with.html

Passport/Session deep dive (express) https://www.airpair.com/express/posts/expressjs-and-passportjs-sessions-deep-dive
