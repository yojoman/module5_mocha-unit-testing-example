const Calculator = require("../../app/calculator.js");
const { expect } = require("chai");

describe("multiply", function () {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  afterEach(() => {
    calculator = null;
  });

  it("should return 6 when called with 2 and 3 parameters", function () {
    expect(calculator.multiply(2, 3)).to.be.equal(6);
  });

  it("should return -8 when called with 2 and -4 parameters", function () {
    expect(calculator.multiply(2, -4)).to.be.equal(-8);
  });

  it("should return 0 when called with 7 and 0 parameters", function () {
    expect(calculator.multiply(7, 0)).to.be.equal(0);
  });

  it("should throw an error if provided with not numbers", function () {
    const callWithError = () => calculator.multiply(3, "q");
    expect(callWithError).to.throw(`Parameters are not numbers!`);
  });
});
