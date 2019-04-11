var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = new Object;
  this.enQNums = 0;
  this.deQNums = 0;

};

Queue.prototype.enqueue = function(value) {
  this.enQNums++;
  this.storage[this.enQNums] = value;
}
Queue.prototype.dequeue = function() {
  if (this.enQNums > this.deQNums) {
    this.deQNums++;
    return this.storage[this.deQNums];
  }
}
Queue.prototype.size = function() {
  return this.enQNums - this.deQNums;

}

