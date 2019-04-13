

// Instantiate a new graph
var Graph = function() { //3, 5
    //var this = Object.create(Graph)  when using new keyword
    this.otherNodes = {};
    //return this
};

//An .addNode() method that takes a new node and adds it to the graph
Graph.prototype.addNode = function(nodeValue) {
    var newNode = {};  //addNode(2) will exist in my graph
    newNode.value = nodeValue;
    newNode.edges = {};
    this.otherNodes[nodeValue] = newNode;
};


// Graph {
//     _proto_: {
//         addNode: function(node) {
                // var newNode = Graph(node)
            
//         }
//     }
// }

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(nodeValue) {
    if (this.otherNodes[nodeValue]) {
        return true;
    } else {
        return false;
    }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(nodeValue) {
    for (var key in this.otherNodes[nodeValue]['edges']) {
        if (this.otherNodes[nodeValue]['edges'][key]) {
            this.otherNodes[nodeValue]['edges'][key] = false;
        }
    }
    delete this.otherNodes[nodeValue];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    if (this.otherNodes[fromNode]['edges'][toNode] === true) {
        return true;
    } else if (this.otherNodes[toNode]['edges'][fromNode] === true) {
        return true;
    } else {
        return false;
    }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.otherNodes[fromNode]['edges'][toNode] = true;
    this.otherNodes[toNode]['edges'][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    this.otherNodes[fromNode]['edges'][toNode] = false;
    this.otherNodes[toNode]['edges'][fromNode] = false;

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {  //cb is the callback function and should apply to every item
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
Graph {
    _proto_: {
        forEachNode: function(cb) {

        }
    }
}
*/