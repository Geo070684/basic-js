const { NotImplementedError } = require('../extensions/index.js');

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

// arr = [1, 2, 3]
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArr = [...arr];
  // console.log(newArr)
  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i] == "--discard-next") {
      newArr.splice(i, 2)
    }

    if (newArr[i] == "--discard-prev" && newArr[i - 2] !== '--discard-next' && i > 0) {
      newArr.splice(i - 1, 2)
    }

    if (newArr[i] == "--discard-prev" &&  i == 0) {
      newArr.splice(0, 1)
    }

    if (newArr[i] == "--double-next" && newArr[i+2] !== "--double-prev" && i < newArr.length - 1  ) {
      let newArr1;
      newArr1 = newArr.slice(i + 1, i + 2)
      newArr.splice(i + 2, 0, newArr1)
      newArr.splice(i, 1)
    }
    if (newArr[i] == "--double-next"  &&  i === newArr.length - 1  ) {
     
      newArr.splice(i, 1)
    } 

    if (newArr[i] == "--double-prev" && newArr[i-2] !== "--discard-next" && i != 0 && newArr[i+2] !== "--double-prev") {
      let newArr1;
      newArr1 = newArr.slice(i - 1, i)
      console.log(newArr1)
      newArr.splice(i - 1, 0, newArr1)
      newArr.splice(i + 1, 1)
      console.log(newArr)
    }

    if (newArr[i] == "--double-prev"  && i === 0 && newArr[i+2] !== "--double-prev") {
      newArr.splice(i, 1)
    }

  } return newArr.flat()
}


module.exports = {
  transform
};
transform([ 1, 2, 3,'--double-prev', 4, 5 ])