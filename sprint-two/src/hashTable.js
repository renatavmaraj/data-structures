

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) { //if empty
    this._storage.set(index, [[k,v]]); // put tuple [k, v] in bucket []
  } else { //ignore else for case
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      //Override if k exists
      if (tuple[0] === k) {
        tuple[1] = v;
      } else {
        bucket.push([k, v]); //inefficient
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
      return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];//[k,v]
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(!bucket) {
    return undefined;
  } else {
      for(var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        //check if key in tuple matches k
        if (tuple[0] === k) {
          bucket.splice(i, 1);
        }
      }
      return undefined;
  }

  //check if empty
  //iterate through bucket and if key is in bucket, delete tuple. Check if size much smaller, resize
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


