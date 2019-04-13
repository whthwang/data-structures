var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // set A creation 
  return set;
};

var setPrototype = {
};

setPrototype.add = function(item) {
  //set can't contain non-unique values
  if (this._storage[item]) {
    return 'cannot add duplicates to a set'
  } else {
    this._storage[item] = item;
  }
},

//set.add('susan sarandon')
  // if (this._storage['susan sarandon']) {
  //   return;
  // } else {
  //   this._storage['susan sarandon'] = 'susan sarandon'
  // }

setPrototype.contains = function(item) {
  if (this._storage[item]) {
    return true;
  } else {
    return false;
  }
},

setPrototype.remove = function(item) {
  if (this._storage[item]) {
    delete this._storage[item];
  }
  return;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
