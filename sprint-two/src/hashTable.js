

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.bucketCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) { //if empty
    this._storage.set(index, [[k, v]]); // put tuple [k, v] in bucket []
    this.bucketCount++;
  } else { //ignore else for case
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      //Override if k exists
      if (tuple[0] === k) {
        tuple[1] = v;
      } else {
        bucket.push([k, v]); //inefficient
        this.bucketCount++;
        if (this.bucketCount > this._limit * 0.75) {
          this.resize(this._limit * 2);
        }
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
  if (!bucket) {
    return undefined;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      //check if key in tuple matches k
      if (tuple[0] === k) {
        bucket.splice(i, 1);
        this.bucketCount--;
        if (this.bucketCount < this._limit * 0.25) {
          this.resize(Math.floor(this._limit / 2));
        }
      }
    }
    return undefined;
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;
  newLimit = Math.max(newLimit, 8);

  if (newLimit !== this._limit) {
    this._limit = newLimit; //Update limit to new limit
    this._storage = LimitedArray(this._limit); //Update storage to new size
    this.bucketCount = 0; //Reset the bucket count

    //Transfer information from old storage to new storage
    oldStorage.each(function(bucket) {
      if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
          var tuple = bucket[i];
          this.insert(tuple[0], tuple[1]);
        }
      }
    }.bind(this));
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 0(n) worst case
 */


