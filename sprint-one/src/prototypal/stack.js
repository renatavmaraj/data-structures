var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  var temp = this.storage[this.counter - 1];
  delete this.storage[this.counter - 1];
  this.counter--;
  return temp;
};

stackMethods.size = function() {
  var size = Object.keys(this.storage).length;
  return size;
};