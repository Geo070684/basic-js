const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  newString: [],

  //  constructor() {
  //   this.newString = [];
  //  },

  getLength() {
    return this.newString.length
  },

  addLink(value) {
     this.newString.push(`( ${value} )`);
     return this
  },

  removeLink(position) {
    if (typeof (position) != "number" || position > this.getLength() || position < 1) {
      this.newString=[]
      throw new Error("You can't remove incorrect link!")
    }
    else {
      this.newString.splice(position-1,1)
    } 
    return this;
  },

  reverseChain() {
    this.newString.reverse()
    return this
  },

  finishChain() {

    let chain = this.newString.join('~~');
    this.newString =[];
    return chain

  }
};

module.exports = {
  chainMaker
};
