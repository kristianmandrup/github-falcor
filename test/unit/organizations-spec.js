var Octokat = require('octokat');

describe('Octokat', () => {
  var octo;
  before(() => {
    octo = new Octokat({
      username: 'freddyucv',
      password: 'password'
    });
  });

  describe('#orgs', () => {
    var orgs;
    before(() => {
      orgs = octo.orgs('freddyucvTest');
    });

    describe('#fetch', () => {
      it('fetches orgs', () => {
        octo.orgs('freddyucvTest').fetch().then(function(orgs) {
          console.log('orgs ' + JSON.stringify(orgs));
          expect(orgs).to.not.eql({});
        });
      });
    });
  });
});
