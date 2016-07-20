const {expect} = require("chai");
const token = require("../token");

describe("Token", function() {

  it("should create a token (with default length)", (done) => {
    token.create().then((createdToken) => {
      expect(createdToken).to.have.length(token.DEFAULT_LENGTH);
      done();
    }).catch((err) => {
      done(err);
    });
  });

  it("should create a long token (with 512 bytes length)", (done) => {
    token.create(token.LONG).then((createdToken) => {
      expect(createdToken).to.have.length(token.LONG);
      done();
    }).catch((err) => {
      done(err);
    });
  });

  it("should create a short token (with 32 bytes length)", (done) => {
    token.create(token.SHORT).then((createdToken) => {
      expect(createdToken).to.have.length(token.SHORT);
      done();
    }).catch((err) => {
      done(err);
    });
  });

});
