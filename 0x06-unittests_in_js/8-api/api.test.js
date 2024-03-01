const { expect } = require("chai");
const request = require("request");

describe("Test of route", () => {
  describe("GET /", () => {
    it("returns status code 200", (done) => {
      const op = {
        url: "http://localhost:7865",
        method: "GET",
      };

      request(op, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal("Welcome to the payment system");
        done();
      });
    });
  });
});
