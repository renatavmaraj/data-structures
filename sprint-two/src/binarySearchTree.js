var BinarySearchTree = function(value) {
  var bstTree = {};
  bstTree.value = value;
  bstTree.left = null;
  bstTree.right = null;

  bstTree.insert = function(value) {
    if (this.value > value) { //if true, we create a left child
      if (!this.left) { //If no current children
        var child = BinarySearchTree(value);
        this.left = child;
      } else {
        this.left.insert(value);
      }

    } else { //create right child
      if (!this.right) { //if no current children
        var child = BinarySearchTree(value);
        this.right = child;
      } else {
        this.right.insert(value);
      }
    }

    return value;
  };

  bstTree.contains = function(target) {
    //base case
    if (this.value === target) { //target found
      return true;
    }
    if (!this.left && !this.right) { //no more children
      return false;
    }
    return (this.value > target) ? this.left.contains(target) : this.right.contains(target);
  };

  bstTree.depthFirstLog = function(cb) {
    //base case
    cb(this.value);
    if (this.left || this.right) {
      if (this.left) {
        this.left.depthFirstLog(cb);
      }
      if (this.right) {
        this.right.depthFirstLog(cb);
      }
    }
  };
  return bstTree;
};

/*
Time Complexity: 0(n) Linear
*/