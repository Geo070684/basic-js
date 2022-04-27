const { NotImplementedError } = require('../extensions/index.js');

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

  if (date == undefined ) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0 ) {
    throw new Error('Invalid date!');
  }
 
  let newMonth = date.getMonth()
  if (2 <= newMonth && newMonth <= 4) {
    return "spring"
  }
  else if (5 <= newMonth && newMonth <= 7) {
    return "summer"
  }
  else if (8 <= newMonth && newMonth <= 10) {
    return "autumn";
  }
  else if (newMonth == 11|| newMonth ==1 || newMonth ==0) {
    return "winter";
  } 
}
module.exports = {
  getSeason
};
