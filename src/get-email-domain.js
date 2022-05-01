const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email ) {
let newEmail=email.split('@')
return  newEmail[newEmail.length-1].toString()
}


getEmailDomain('prettyandsimple@example.com')
module.exports = {
  getEmailDomain
};