var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //someObject is now an empty object
  
  var someObject = Object.create(queueMethods);

  //Object.getPrototypeOf(someObject) === queueMethods //true

  someObject.storage = {};
  someObject.enQNums = 0;
  someObject.deQNums = 0;

  return someObject;

};

var queueMethods = {

  enqueue: function(value) {
    this.enQNums++;
    this.storage[this.enQNums] = value;
  },

  dequeue: function() {
    if (this.enQNums > this.deQNums) {
      this.deQNums++;
      return this.storage[this.deQNums];
    }
  },

  size: function() {
    return this.enQNums - this.deQNums;
  }
 };


