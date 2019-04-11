var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someObject = {};
  someObject.stackNums = 0;
  someObject.storage = {};
  extend(someObject, stackMethods);

  return someObject;

};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}


var stackMethods = {
  push: function(value) {
    this.stackNums++;
    this.storage[this.stackNums] = value;
  },

  pop: function() {
      var poppedOff = this.storage[this.stackNums];
      delete this.storage[this.stackNums];
      this.stackNums--;
      return poppedOff;
  },

  size: function() {
    return this.stackNums;
  }
};

const obj1 = Stack()
const obj2 = Stack()
//how is this going to be shared by all instances? what class?



//create an object that holds the methods that are shared by all instances of the class.

//use keyword this

//use _.extend to copy the methods onto the instance.

//don't use new or prototype chains

//start the function with an empty function inside and define 
//properties within the function


//methods are defined in another object
//then extend the object with these methods
//in the end, return the object;