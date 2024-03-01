const { expect } = require("chai");
const sinon = require("sinon");

const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi function", () => {
  const Utilspy = sinon.spy(Utils, "calculateNumber");

  it("validate the usage of the Utils func", () => {
    sendPaymentRequestToApi(100, 20);
    expect(Utilspy.calledOnce).to.be.true;
    expect(Utilspy.calledWith("SUM", 100, 20)).to.be.true;

    Utilspy.restore();
  });
});
