/**
 *
 * a simple class containing methods for summarizing and multiplying a and b parameters
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {}

  /**
   *
   *
   * @param {number} a first parameter
   * @param {number} b second parameter
   * @return {number} summ of a and b if they are numbers
   * @memberof Calculator
   */
  add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else throw new Error(`Parameters are not numbers!`);
  }

  /**
   *
   *
   * @param {number} a first parameter
   * @param {number} b second parameter
   * @return {number} multiplication of a and b if they are numbers
   * @memberof Calculator
   */
  multiply(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a * b;
    } else throw new Error(`Parameters are not numbers!`);
  }
}
module.exports = Calculator;
