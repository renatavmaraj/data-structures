var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var currentKey = Object.keys(storage).length;
    storage[currentKey]=value;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    var currentKey = Object.keys(storage).length;
    var temp = storage[currentKey];
    for (var i = 0; i < currentKey - 1; i++) {
      storage[i] = storage[i + 1];
    }
    storage[currentKey - 1] = temp;
    delete storage[currentKey - 1];
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};


/*
{0: 'z',
1:'a',
2: 'b',
3: 'c'}
{1:'a',
2:'b',
3: 'c'}
*/