var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = new Object;    //setting a storage object inside the object Stack
  this.stackNums = 0;
};

Stack.prototype.push = function(value) {
  this.stackNums++;
  this.storage[this.stackNums] = value;
}

Stack.prototype.pop = function() {
  if (this.stackNums > 0) {
    var poppedOff = this.storage[this.stackNums];
    delete this.storage[this.stackNums];
    this.stackNums--;
    return poppedOff;
  }
}

Stack.prototype.size = function() {
  return this.stackNums;
}



