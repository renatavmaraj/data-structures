var Stack = function() {
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Stack.prototype.pop = function() {
  var temp = this.storage[this.counter - 1];
  delete this.storage[this.counter - 1];
  this.counter--;
  return temp;
};

Stack.prototype.size = function() {
  var size = Object.keys(this.storage).length;
  return size;
};

