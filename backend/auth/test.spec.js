process.env.NODE_ENV = 'test';

const User = require('../db/models/users');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Auth', () => {
  beforeEach(done => {
    // Before each test we empty the database
    done();
  });
  /*
  * Test the /GET route
  */
  describe('/POST Signup', () => {
    it('it should Sign up a user', done => {
      chai
        .request(server)
        .post('/api/auth/signup')
        .send({
          email: 'youssuf.new@gmail.com',
          name: 'youssuf',
          password: 'test',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('token');
          done();
        });
    });
  });
  describe('/POST Signin', () => {
    it('it should Sign in a user', done => {
      chai
        .request(server)
        .post('/api/auth/signin')
        .send({
          email: 'test@test.com',
          password: 'test',
        })
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });
});
