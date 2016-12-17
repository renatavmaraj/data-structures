var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  if (this._storage.length === 0) {
    return false;
  } else {
    for (var i = 0; i < this._storage.length; i++) {
      if (this._storage[i] === item) {
        return true;
      }
    }
    return false;
  }
};

setPrototype.remove = function(item) {
    if (this._storage.length === 0) {
    return null;
  } else {
    for (var i = 0; i < this._storage.length; i++) {
      if (this._storage[i] === item) {
        this._storage.splice(i, 1);
      }
    }
    return null;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 0(1) - constant for add method
 0(n) - remove and contains methods are both linear
 */
