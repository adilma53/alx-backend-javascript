const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber with type", () => {
  // sum of numbers
  describe("sum of numbers", () => {
    it("should return the sum of 5 and 3", () => {
      assert.equal(calculateNumber("SUM", 5, 3), 8);
    });
    it("should return the sum of 2.5 and 4.2", () => {
      assert.equal(calculateNumber("SUM", 2.5, 4.2), 7);
    });
    it('should return -1.5 when adding -0.9 and -0.6', () => {
      assert.equal(calculateNumber('SUM', -0.9, -0.6), -2);
    });
  });


  // subtract
  describe("SUBTRACT of numbers", () => {
    // positives
    it("should return the correct result when subtracting two positive numbers", () => {
      assert.equal(calculateNumber("SUBTRACT", 10, 4), 6);
    });
    it('should return 0 when subtracting 0.5 and 0.3', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.5, 0.3), 1);
    });
    it('should return -0.1 when subtracting -0.4 and -0.3', () => {
      assert.equal(calculateNumber('SUBTRACT', -0.4, -0.3), -0);
    });
  });

  // divide numbers
  describe("DIVIDE OF NUMBERS", () => {
    it("positive DIVIDE numbers", () => {
      assert.equal(calculateNumber("DIVIDE", 8.0, 2.0), 4);
      assert.equal(calculateNumber("DIVIDE", 10.0, 5.0), 2);
    });
    // negative numbers divide
    it("negative DIVIDE numbers and equal rounded down", () => {
      assert.equal(calculateNumber("DIVIDE", -10.0, 5.0), -2);
      assert.equal(calculateNumber("DIVIDE", -7.0, 2.0), -3.5);
      assert.equal(calculateNumber("DIVIDE", 0.0, -5.0), -0);
      assert.equal(calculateNumber("DIVIDE", 2.4, 2.0), 1);
      assert.equal(calculateNumber("DIVIDE", 2.6, 3.0), 1);
    });
    it("return 'Error' when dividing 2.5 and 0.1", () => {
      assert.equal(calculateNumber('DIVIDE', 2.5, 0.1), 'Error');
    });
  });
});
