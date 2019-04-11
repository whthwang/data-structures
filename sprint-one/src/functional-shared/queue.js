var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someObject = {};
  someObject.enQNums = 0;
  someObject.deQNums = 0;
  someObject.storage = {};
  extend(someObject, queueMethods);
  return someObject;
  
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var queueMethods = {
  enqueue: function(value) {  //when enqueue, enQNums goes up, storage[enQNums] = value, 
    this.enQNums++;
    this.storage[this.enQNums] = value;
    
  },

  dequeue: function() {
    if (this.deQNums < this.enQNums) {
      this.deQNums++;
      return this.storage[this.deQNums];
    }
  },

  size: function() {
    return this.enQNums - this.deQNums;
  }

};

