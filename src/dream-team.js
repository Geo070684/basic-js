const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) 
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members == null || members.length == 0) {
    return false;
  }

  let stringName = []
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      console.log(1)
      let item =members[i].trim()
      stringName.push(item[0].toUpperCase())
    } 
  }
return stringName.sort().join('') 
}


// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max', 123, ])


module.exports = {
  createDreamTeam
};
