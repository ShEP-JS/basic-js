const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date == null) {
    return "Unable to determine the time of year!";
  }
  try {
    date.getTime();
  } catch (error) {
    throw new Error("Invalid date!");
  }
  let month = date.getMonth();

  if (isNaN(Date.parse(date))) {
    throw new Error("Invalid date!");
  } else {
    if (month === 11 || month === 0 || month === 1) {
      return "winter";
    }
    if (month > 1 && month < 5) {
      return "spring";
    }
    if (month > 4 && month < 8) {
      return "summer";
    }
    if (month > 7 && month < 11) {
      return "fall";
    }
  }
}

module.exports = {
  getSeason,
};
