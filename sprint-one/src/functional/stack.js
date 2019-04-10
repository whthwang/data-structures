var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackNum = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    stackNum++;
    storage[stackNum] = value;
  };

  someInstance.pop = function() {
    if (stackNum > 0) {
    var poppedOff = storage[stackNum];
    delete storage[stackNum];
    stackNum--;
    return poppedOff;
    }
  };

  someInstance.size = function() {
    return stackNum;
  };

  return someInstance;
};
