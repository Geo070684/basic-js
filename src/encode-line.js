const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let newArr = str.split('');
  let outArr = [];
  // let newOutArr =[];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == newArr[i + 1]) {
      count++;
    } else {
      outArr.push(count);
      outArr.push(newArr[i])
      count = 1
    }
    outArr.forEach((item, index) => {
      if (item === 1) {
        outArr.splice(index, 1)
      }

    })
  } return outArr.join('')
}


// encodeLine("aaddjjo")
module.exports = {
  encodeLine
};
