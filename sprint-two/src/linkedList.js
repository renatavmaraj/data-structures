var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    var currentNode = this.head;
    if (!currentNode) {
      //If empty linked list
      this.head = node;
    } else {
      //Move to the tail of the linked list
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      //Point the old tail to the new tail
      currentNode.next = node;

    }
    this.tail = node;
    return node;
  };

  list.removeHead = function() {
    //check if empty
    var currentNode = this.head;
    if (currentNode) {
      var newNode = currentNode.next;
      this.head = newNode;
    }
    return currentNode.value;
  };

  list.contains = function(target) {

    var currentNode = this.head;
    if (!currentNode) {
      return false;

    } else {
      while (currentNode.next) {
        if (currentNode.value === target) {
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }
      if (currentNode.value === target) {
        return true;
      }
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(N) - Linear because list needs to be traversed in order to add tail.
 */
