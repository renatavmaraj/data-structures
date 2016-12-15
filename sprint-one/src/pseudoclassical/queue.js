var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var currentKey = Object.keys(this.storage).length;
  this.storage[currentKey] = value;
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


