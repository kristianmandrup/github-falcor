var Octokat = require('octokat');

describe('Octokat repos', () => {
  var octo;
  before(() => {
    octo = new Octokat({
      username: 'freddyucv',
      password: 'password'
    });
  });

  describe('#repos', () => {
    var repos;
    before(() => {
      repos = octo.users('freddyucv').repos;
    });

    describe('#fetch', () => {
      it('fetches repos', () => {
        repos.fetch().then(function(data) {
          console.log('repos ' + JSON.stringify(data));
          expect(data).to.not.eql({});
        });
      });
    });

    describe('#contents', () => {
      var readme;
      var repo;

      before(() => {
        repo = octo.repos('freddyucv', 'hello-world');
        readme = repo.contents('README.md');
      });

      it('contains title: Hello World', () => {
        //expect(readme.read()).to.eql('Hello World');
      });
    });

    describe('#issues', () => {
      it('fetches issues', () => {

        octo.repos('freddyucv', 'hello-world').issues.fetch().then(function(data) {
          console.log('issues ' + JSON.stringify(data));
          expect(data).to.not.eql({});
        });
      });

      describe('#comments', () => {
        describe('1st issue', () => {

          before(() => {
            issue = octo.repos('freddyucv', 'hello-world').issues(1);
          });

          it('has no comments', () => {
            expect(issue.comments).to.not.eql({});
          });
        });

        describe('2nd issue', () => {

          before(() => {
            issue = octo.repos('freddyucv', 'hello-world').issues(1);
          });

          it('has comments', () => {
            //expect(issue.comments.length).to.be.gt(0);
          });
        });
      });
    });
  });
});
