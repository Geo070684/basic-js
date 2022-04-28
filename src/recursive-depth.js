const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * 
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    let count = 1;
    for (let i=0; i< arr.length; i++) {
      let newCount=1
      if (Array.isArray(arr[i])) {
         newCount += this.calculateDepth(arr[i])
        if (count < newCount) {
          count = newCount
        }
      }
    }
    return count
  }
}

// const depthCalc = new DepthCalculator();
// depthCalc.calculateDepth([[[]]])

module.exports = {
  DepthCalculator
};
