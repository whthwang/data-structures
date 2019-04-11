class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(enQNums, deQNums, storage) {
    this.enQNums = 0;
    this.deQNums = 0;
    this.storage = new Object;
  }

  enqueue(value) {
    this.enQNums++;
    this.storage[this.enQNums] = value;
  }

  dequeue() {
    if (this.enQNums > this.deQNums) {
      this.deQNums++;
      return this.storage[this.deQNums];
    }
  }

  size() {
    return this.enQNums - this.deQNums;
  }
}
