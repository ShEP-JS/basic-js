const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  } else {
    let newArr = domains.sort((a, b) => a.length - b.length).reverse();
    let obj = {};

    let secontDot = newArr[0].lastIndexOf(".");
    let subStr1 = newArr[0].substring(secontDot);
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].indexOf(subStr1) != -1) {
        count++;
      }
    }

    obj[`"${subStr1}"`] = count;

    let firstDot = newArr[0].indexOf(".");
    let subStr2 = newArr[0].substring(firstDot + 1, secontDot);
    let count1 = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].indexOf(subStr2) != -1) {
        count1++;
      }
    }

    obj[`"${subStr1}.${subStr2}"`] = count1;
    let subStr3 = "." + newArr[0].substring(0, firstDot);
    obj[`"${subStr1}.${subStr2}${subStr3}"`] = 1;

    return obj;
  }
}

module.exports = {
  getDNSStats,
};
