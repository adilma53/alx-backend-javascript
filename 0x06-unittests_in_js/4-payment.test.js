const { expect } = require("chai");
const sinon = require("sinon");

const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi function", () => {
  const ConsoleUtilspy = sinon.spy(console, "log");

  it("validate the usage of the Utils func", () => {
    const calNumbstub = sinon.stub(Utils, "calculateNumber").returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(calNumbstub.calledWith("SUM", 100, 20)).to.be.true;
    expect(calNumbstub.alwaysReturned(10)).to.be.true;
    expect(ConsoleUtilspy.calledWith("The total is: 10")).to.be.true;

    calNumbstub.restore();
    ConsoleUtilspy.restore();
  });
});
