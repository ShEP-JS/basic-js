const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(newArr) {
  if (!Array.isArray(newArr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let dbn = "--double-next";
  let dp = "--discard-prev";
  let dbp = "--double-prev";
  let dn = "--discard-next";

  let arr = [...newArr];
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === dp || arr[0] === dbp) {
      arr.splice(0, 1);
    }
    if (arr[arr.length - 1] === dn || arr[arr.length - 1] === dbn) {
      arr.splice(arr.length - 1, 1);
    }
    if (arr[i] == dbn) {
      arr.splice(i, 1, arr[i + 1]);
    }
    if (arr[i] == dbp) {
      arr.splice(i, 1, arr[i - 1]);
    }
    if (arr[i] == dp) {
      arr.splice(i - 1, 2);
    }
    if (arr[i] == dn) {
      if (arr[i + 2] == dp || arr[i + 2] == dbp) {
        arr.splice(i, 3);
      } else {
        arr.splice(i, 2);
      }
    }
  }
  return arr;
}

module.exports = {
  transform,
};
