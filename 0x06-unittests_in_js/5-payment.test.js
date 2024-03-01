const { expect } = require("chai");
const sinon = require("sinon");

const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToApi function", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    expect(consoleSpy.calledOnce).to.be.true;
    consoleSpy.restore();
  });

  it("validate the usage of the Utils func", () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith("The total is: 120")).to.be.true;
  });

  it("validate the usage of the Utils func", () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith("The total is: 120")).to.be.true;
  });
});
