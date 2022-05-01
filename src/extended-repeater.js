const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = []
  let arrForAddition = []
  // let newStr = str.toString();
  let repeatTimes = 0;
  let separator = "+";
  let addition = "";
  let additionRepeatTimes = 0;
  let additionSeparator = "|"


  for (let option in options) {
    if (option === "repeatTimes") {
      repeatTimes = options[option]
    }

    else if (option === "separator") {
      separator = options[option]
    }
    else if (option === "addition") {
       addition = options[option]
    }
    else if (option === "additionRepeatTimes") {
       additionRepeatTimes = options[option]
    }

    else if (option === "additionSeparator") {
       additionSeparator = options[option]
      console.log(additionSeparator)
    }

  }

  for (let i = 0; i < additionRepeatTimes; i++) {
    arrForAddition.push(`${addition}`)
  }

  let allAddition = arrForAddition.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i++) {
    result.push(`${str}${allAddition}`)
  }

return result.join(`${separator}`)

}

// repeater('STRING', {
//   repeatTimes: 3,
//   addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00'
// })





module.exports = {
  repeater
};
