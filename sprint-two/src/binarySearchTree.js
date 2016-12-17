// var BinarySearchTree = function(value) {
//   var newTree = Object.create(bstMethods);
//   newTree.value = value;
//   newTree.parent = null;
//   newTree.left = null;
//   newTree.right = null;

//   return newTree;
// };

// var bstMethods = {}
// bstMethods.insert = function(value) {
//     // if (this.root.value > value) { //if true, we create a left child
//     //   if (!this.root.left) { //If no current children
//     //     var child = new Node(value);
//     //     this.root.left = child;
//     //     child.parent = this.root;
//     //   } else {
//     //     this.root.left.insert(value);
//     //   }

//     // } else { //create right child
//     //   if (!this.root.right) { //if no current children
//     //     var child = new Node(value);
//     //     this.root.right = child;
//     //     child.parent = this.root;
//     //   } else {
//     //     this.root.right.insert(value);
//     //   }
//     // }

//     return value;
//   };
// bstMethods.contains = function(value) {
//     return value;
//   };

// bstMethods.depthFirstLog = function(value) {
//     return value;
//   };



var BinarySearchTree = function(value) {
  var bstree = {};
  this.value = value;
  this.parent = null;
  this.left = null;
  this.right = null;

  bstree.insert = function(value) {
    // code for method1 here
  }

  bstree.contains = function(value) {
    // code for method2 here
  }

  bstree.depthFirstLog = function(value) {

  }
  return bstree;
};
