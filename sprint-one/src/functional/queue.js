var Queue = function() {
  var someInstance = {};

  // // Use an object with numeric keys to store values

  var storage = {};
  var enqueueNum = 0;
  var dequeueNum = 0;
  // // Implement the methods below

  // //collection are the addition of entities to the rear terminal position, known as enqueue, and 
  // //removal of entities from the front terminal position, known as dequeue

  someInstance.enqueue = function(value) {
    enqueueNum++;
    storage[enqueueNum] = value;
  };

  someInstance.dequeue = function() {
    if (dequeueNum < enqueueNum) {
      dequeueNum++;
      return storage[dequeueNum];
    }
  };

  someInstance.size = function() {
      return enqueueNum - dequeueNum; 
  };

  return someInstance;

};


// var newInstance = Queue();
// newInstance.enqueue(value)
// newInstance.dequeue()



