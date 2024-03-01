const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

// sum of numbers
describe("sum of numbers", () => {
  it("should return the sum of 5 and 3", () => {
    expect(calculateNumber("SUM", 5, 3)).to.equal(8);
  });
  it("should return the sum of 2.5 and 4.2", () => {
    expect(calculateNumber("SUM", 2.5, 4.2)).to.equal(7);
  });
  it("should return -1.5 when adding -0.9 and -0.6", () => {
    expect(calculateNumber("SUM", -0.9, -0.6)).to.equal(-2);
  });
});

// subtract
describe("SUBTRACT of numbers", () => {
  // positives
  it("should return the correct result when subtracting two positive numbers", () => {
    expect(calculateNumber("SUBTRACT", 10, 4)).to.equal(6);
  });
  it("should return 0 when subtracting 0.5 and 0.3", () => {
    expect(calculateNumber("SUBTRACT", 0.5, 0.3)).to.equal(1);
  });
  it("should return -0.1 when subtracting -0.4 and -0.3", () => {
    expect(calculateNumber("SUBTRACT", -0.4, -0.3)).to.equal(-0);
  });
});

// divide numbers
describe("DIVIDE OF NUMBERS", () => {
  it("positive DIVIDE numbers", () => {
    expect(calculateNumber("DIVIDE", 1, 4)).to.equal(0.25);
    expect(calculateNumber("DIVIDE", 1, 3.7)).to.equal(0.25);
  });
  // negative numbers divide
  it("negative DIVIDE numbers and equal rounded down", () => {
    expect(calculateNumber("DIVIDE", -10.0, 5.0)).to.equal(-2);
    expect(calculateNumber("DIVIDE", -7.0, 2.0)).to.equal(-3.5);
    expect(calculateNumber("DIVIDE", 0.0, -5.0)).to.equal(-0);
    expect(calculateNumber("DIVIDE", 2.4, 2.0)).to.equal(1);
    expect(calculateNumber("DIVIDE", 2.6, 3.0)).to.equal(1);
  });
  it("return 'Error' when dividing 2.5 and 0.1", () => {
    expect(calculateNumber("DIVIDE", 2.5, 0.1)).to.equal("Error");
  });
});
