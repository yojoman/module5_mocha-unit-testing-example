const Calculator = require("../../app/calculator.js");
const { expect } = require("chai");

describe("add", function () {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  afterEach(() => {
    calculator = null;
  });

  it("should return 3 when called with 1 and 2 parameters", function () {
    expect(calculator.add(1, 2)).to.be.equal(3);
  });

  it("should return -6 when called with 3 and -9 parameters", function () {
    expect(calculator.add(3, -9)).to.be.equal(-6);
  });

  it("should return 7 when called with 0 and 7 parameters", function () {
    expect(calculator.add(0, 7)).to.be.equal(7);
  });

  it("should throw an error if provided with not numbers", function () {
    const callWithError = () => calculator.add(1, "n");
    expect(callWithError).to.throw(`Parameters are not numbers!`);
  });
});
