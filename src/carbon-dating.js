const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string") {
    return false;
  }
  if (sampleActivity.trim() === "") {
    return false;
  }
  if (isNaN(sampleActivity / 1)) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
  if (t < 0 || isNaN(t) || !isFinite(t)) {
    return false;
  }
  return Math.ceil(t);
}

module.exports = {
  dateSample,
};
