import agent from 'supertest-koa-agent';
import {expect} from 'chai';
import server from '../../src';

function user(name, password) {
  return {username: name, password: password};
}

describe('Authentication: ', () => {
  let app;
  var users = {
    valid: user('freddyucv', 'xxxx'),
    invalid: user('johndoe', 'secret')
  };

  beforeEach(() => {
    app = agent(server);
  });

  it('Success', function(done) {
    app.get('/login').send(users.valid).expect(200, done);
  });

  it('Fail', function(done) {
    app.get('/login').send(users.invalid).expect(401, done);
  });

});
