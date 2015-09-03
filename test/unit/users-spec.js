var Octokat = require('octokat');

describe('Octokat users', () => {
  var octo;
  before(() => {
    octo = new Octokat({
      username: 'freddyucv',
      password: 'password'
    });
  });

  describe('#users', () => {
    describe('#fetch', () => {
      it('fetches users', () => {
        octo.users.fetch().then(function(data) {
          console.log('data ' + JSON.stringify(data));
          expect(data).to.not.eql({});
        });
      });
    });
  });

  describe('#user', () => {
    var user;
    before(() => {
      user = octo.user;
    });

    describe('#orgs', () => {
      describe('#fetch', () => {
        it('fetches orgs', () => {
          octo.user.orgs.fetch().then(function(orgs) {
            console.log('orgs ' + JSON.stringify(orgs));
            expect(orgs).to.not.eql({});
          });
        });
      });
    });

    describe('#repos', () => {
      var repos;
      before(() => {
        repos = octo.repos;
      });

      describe('collaborator', () => {
        before(() => {
          repos = octo.repos('collaborator');
        });
      });

      describe('#organizationMember', () => {
        before(() => {
          repos = octo.repos('organizationMember');
        });
      });
    });
  });
});
