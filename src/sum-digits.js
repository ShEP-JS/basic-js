const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = n.toString();

  function numSum(str) {
    let arr = Array.from(str);
    let ans = arr.reduce((sum, item) => sum + +item, 0);
    if (ans.toString().length > 1) {
      return numSum(ans.toString());
    }
    return ans;
  }

  return numSum(str);
}

module.exports = {
  getSumOfDigits,
};
