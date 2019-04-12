var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //case for if list is empty as it currently is
    if (list.tail === null && list.head === null) {
      //create the node
      var newNode = Node(value);
      //the new node being added is going to be the head and the tail
      list.head = newNode;
      list.tail = newNode;
    } else if (list.head !== null && list.tail !== null) {  //if list is not empty 
      //create the node
      var newNode = Node(value)  //newNode is already calling Node(value) {value: value, next: null}
      //the current list tail is the last node
      var lastNode = list.tail;
      //the tail needs to point to the new node. This is adding to tail
      list.tail = newNode;
      //the previous node needs to point to the new node under value next
      lastNode.next = newNode;
      //the new node should have a value of what was passed in
      newNode.value = value;
    }
  }

  list.removeHead = function() {
    //if list is empty
    if (list.head === null && list.tail === null) {
      //can't remove from head if no head
      return;
    } else {
      var currentFirstNode = list.head;
      //assign the next node to be the head
      list.head = currentFirstNode.next;
      //severing the current head
      currentFirstNode.next = null;
      return currentFirstNode.value;
    }
  };

  list.contains = function(target) {
    // returns boolean reflecting whether or not the passed-in value is in the linked list
    var nextNode = list.head;
   //need to loop through all the objects in between
    while (nextNode !== null) {
      if (nextNode.value === target) {
        return true;
      }
      nextNode = nextNode.next;
     }
     return false;
  };
  return list; 

  //while loop that's not currently working
  // if (list.head.next === null)
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
