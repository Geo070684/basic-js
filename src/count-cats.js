const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(Array) {
  let number = 0;
  for (let i = 0; i < Array.length; i++) {
    for (let j = 0; j < Array[i].length; j++) {
      if (Array[i][j] === '^^') {
        number++
      }
    }
  }
  return number

  // remove line with error and write your code here
}
// countCats([
//   [0, 1, 5],
//   [0, 7, 5],
//   [3, 1, 2]
// ])
module.exports = {
  countCats
};
