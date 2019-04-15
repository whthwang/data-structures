var BinarySearchTree = function(value) { //use the prototypal method
  var newTree = Object.create(BinarySearchTree);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  
  return newTree;
};

BinarySearchTree.insert = function(value){
  //create a new tree
      //is value greater than the top tree?
  var tree = BinarySearchTree(value);
    function traverse(node) {
      if (value > node.value) {
        if (node.right === null) {
          node.right = tree;
        } else {
         return  traverse(node.right);
        }
        } else if (value < node.value) {
          if (node.left === null) {
            node.left = tree;
          } else {
            return traverse(node.left);
          }
        }
      }
       traverse(this);
    }

BinarySearchTree.contains = function(target) {
  if (target === this.value) {
    return true;
  } else if (target > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(target);
      }
  } else if (target < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(target);
    }
  }
}

BinarySearchTree.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
     return this.left.depthFirstLog(cb);
  } else if (this.right !== null) {
     return this.right.depthFirstLog(cb);
  } else if (this.right === null && this.left === null) {
    //how to get back to the top of the tree?
  }
}

 