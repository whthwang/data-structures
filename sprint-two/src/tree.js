var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

//.children property, an array containing a number of subtrees
//.addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
//A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childObj = Tree(value);
  this.children.push(childObj);
};

//.contains() method, takes any input and returns a boolean reflecting
//whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    } else if (this.children[i].contains(target)) {
      return true;          
    }
  }
  return false;
  //base case
  

  //recursion

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
