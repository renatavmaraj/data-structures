var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  var currentKey = Object.keys(this.storage).length;
  this.storage[currentKey] = value;
};

queueMethods.dequeue = function () {
  var dequeued = this.storage[0];
  var currentKey = Object.keys(this.storage).length;
  var temp = this.storage[currentKey];
  for (var i = 0; i < currentKey - 1; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  this.storage[currentKey - 1] = temp;
  delete this.storage[currentKey - 1];
  return dequeued;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};

