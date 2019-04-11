var Stack = function() {
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
//stackMethods = {} and Object.getPrototypeOf(stackMethods) === someObject --> true
var someObject = Object.create(stackMethods);

  //setting property storage under someObject which is currently an empty object
  someObject.storage = {};
  //setting property stackNums under someObject which only has property storage
  someObject.stackNums = 0;

  return someObject;

};

var stackMethods = {

  push: function(value) {
    this.stackNums++;
    this.storage[this.stackNums] = value;
  },

  pop: function() {
    if (this.stackNums > 0) {
      var poppedOff = this.storage[this.stackNums];
      delete this.storage[this.stackNums];
      this.stackNums--;
      return poppedOff;
    }
  },

  size: function() {
    return this.stackNums;
  }
};



