// Instantiate a new graph
var Graph = function() {
  this.edges = {};
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) { // if the node exists
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return false;
  }

  for (var key in this.edges) {
    //search key matches from node
    //serach for match with toNode
    var node1 = this.edges[key][0] === fromNode && this.edges[key][1] === toNode;
    var node2 = this.edges[key][1] === fromNode && this.edges[key][0] === toNode;
    if (node1 || node2) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (typeof fromNode === 'string') {
    fromNode = parseInt(fromNode);
  }
  this.edges[fromNode] = [fromNode, toNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    delete this.edges[fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 //hasEdge = 0(n) - Linear
 //removeEdge = 0(n) - Linear
 //removeNode = 0(1) - Constat
 //forEachNode = 0(n) - Linear
 //addNode = 0(1) - Constant
 //contains = 0(1) - Constant
 //addEdge = 0(1) - Constant
 */
