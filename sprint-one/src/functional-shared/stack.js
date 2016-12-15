var Stack = function() {

  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  _.extend(someInstance, stackMethods);

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
  return Object.keys(this.storage).length;
};


