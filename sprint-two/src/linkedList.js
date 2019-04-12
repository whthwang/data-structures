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
    }
  }




    // if (list.head === null && list.tail === null) {
    //   var newNode = Node(value);
    //   list.tail = newNode;
    //   list.head = newNode;
    // } else {
    //   var newNode = Node(value);
    //   list.tail = newNode;
    // }

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
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
