var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage {};

  storage.oldest= 0;
  storage.newest = 0;

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {

enqueue : function(){
  this.storage[newest] = value;
  this.newest ++;
},

dequeue : function() {
  var results = this.storage[oldest];
  if(results){
    oldest++;
  }
  return results;
},

size : function() {
  return newest - oldest;
}

};


