Github API integration
======================

Development plan
----------------

-	Create Falcor Koa server using [falcor-koa](https://github.com/kristianmandrup/falcor-koa)

### Routes

https://github.com/alexmingoia/koa-router

```js
var app = require('koa')();
var router = require('koa-router')();

router.get('/', function *(next) {...});

app
  .use(router.routes())
  .use(router.allowedMethods());
```

### Tests

Move the tests to the `/test` folder and make them executable via `mocha` using chai.

Use this example as guidance for setup: https://github.com/russmatney/koa-gulp-crud

Follow this testing guide http://elijahmanor.com/unit-test-like-a-secret-agent-with-sinon-js/

-	Simulate Ajax Request/Response https://github.com/jakerella/jquery-mockjax
-	Mock JSON data http://experiments.mennovanslooten.nl/2010/mockjson/

DATA
----

See *API Specs.md*

### Organization data

https://developer.github.com/v3/orgs/

(done) - List organizations for the authenticated user. GET /user/orgs

(done) - Get an organization GET /orgs/:org

```json
{
  "login": "github",
  "id": 1,
  "url": "https://api.github.com/orgs/github",
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "description": "A great organization",
  "name": "github",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "html_url": "https://github.com/octocat",
  "created_at": "2008-01-14T04:33:35Z",
  "type": "Organization"
}
```

### Repos

(done) - List your repositories GET /user/repos

`affiliation` string Comma-separated list of values. Can include:

(done) - owner: Repositories that are owned by the authenticated user. (done) - collaborator: Repositories that the user has been added to as a collaborator. (done) - organization_member: Repositories that the user has access to through being a member of an organization.

(done) Default: `owner,collaborator,organization_member`

-	List organization repositories GET /orgs/:org/repos

`type` string Can be one of all, public, private, forks, sources, member. Default: all

-	List languages GET /repos/:owner/:repo/languages

-	List Teams GET /repos/:owner/:repo/teams

-	List Tags GET /repos/:owner/:repo/tags

-	List Branches GET /repos/:owner/:repo/branches

-	List pull requests GET /repos/:owner/:repo/pulls

### Users

-	Get a single user GET /users/:username

```json
  "login": "octocat",
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "followers": 20,
```

### Issues

-	List all issues for a given organization for the authenticated user: GET /orgs/:org/issues

-	List issues for a repository GET /repos/:owner/:repo/issues

`milestone` integer or string If an integer is passed, it should refer to a milestone number. If the string * is passed, issues with any milestone are accepted. If the string none is passed, issues without milestones are returned.`state` string Indicates the state of the issues to return. Can be either open, closed, or all. Default: open

-	Get a single issue GET /repos/:owner/:repo/issues/:number

-	Create an issue POST /repos/:owner/:repo/issues

Any user with pull access to a repository can create an issue.

-	Edit an issue PATCH /repos/:owner/:repo/issues/:number

Issue owners and users with push access can edit an issue.

### Events API

The MOST important

https://developer.github.com/v3/activity/events/

-	List public events
-	List repository events
-	List issue events for a repository
-	List public events for an organization
-	List events that a user has received
-	List public events that a user has received
-	List events performed by a user
-	List public events performed by a user
-	List events for an organization

Specific
--------

-	List repository events GET /repos/:owner/:repo/events
-	List issue events for a repository GET /repos/:owner/:repo/issues/events

List public events for an organization

GET /orgs/:org/events

List events for an organization

This is the user’s organization dashboard. You must be authenticated as the user to view this.

GET /users/:username/events/orgs/:org

List events performed by a user

If you are authenticated as the given user, you will see your private events. Otherwise, you’ll only see public events.

GET /users/:username/events List public events performed by a user

GET /users/:username/events/public

### Repo tags

Create a Tag Object

Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then create the refs/tags/[tag] reference. If you want to create a lightweight tag, you only have to create the tag reference - this call would be unnecessary.

POST /repos/:owner/:repo/git/tags

Repo labels
-----------

List all labels for this repository

GET /repos/:owner/:repo/labels

Create a label

POST /repos/:owner/:repo/labels

Update a label

PATCH /repos/:owner/:repo/labels/:name

Delete a label

DELETE /repos/:owner/:repo/labels/:name

Add labels to an issue

POST /repos/:owner/:repo/issues/:number/labels

Remove a label from an issue

DELETE /repos/:owner/:repo/issues/:number/labels/:name

### Deployments

https://developer.github.com/v3/repos/deployments/

### Releases

https://developer.github.com/v3/repos/releases/

### Stats

https://developer.github.com/v3/repos/statistics/

### Statuses

https://developer.github.com/v3/repos/statuses/

### Search

Search repositories

Find repositories via various criteria. This method returns up to 100 results per page.

GET /search/repositories
