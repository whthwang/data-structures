class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, stackNums) {
    this.storage = {};
    this.stackNums = 0;
  }

  push(value) {
    this.stackNums++;
    this.storage[this.stackNums] = value;
  }

  pop() {
    if (this.stackNums > 0) {
      let poppedOff = this.storage[this.stackNums];
      delete this.storage[this.stackNums];
      this.stackNums--;
      return poppedOff;
    }
  }

  size() {
    return this.stackNums;
  }



}