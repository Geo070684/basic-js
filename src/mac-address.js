const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-')
  for (let i = 0; i < arr.length; i++) {
    let regular = /^[0-9A-F]{2}/g;
    let item = arr[i]
    // console.log(regular.test(arr[i]))

    if (regular.test(item) && arr.length === 6) {
      console.log(arr.length)
      return true
    }
    else {
       return false
    }
  }
}

isMAC48Address('00-1B-63-84-45-E6-fd')

module.exports = {
  isMAC48Address
};
