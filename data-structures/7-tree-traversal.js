/*
================================================================

Tree Traversal:
----------------------
Traversal is a process to visit all the nodes of a tree and may print
their values too. Because, all nodes are connected via edges (links)
we always start from the root (head) node. That is, we cannot randomly
access a node in a tree.

Generally, we traverse a tree to search or locate a given item or key
in the tree or to print all the values it contains.

In more generic way, there are 2 different ways of tree traversal.
    1) BFS (Breadth First Search)
    2) DFS (Depth First Search)


BFS (Breadth First Search):
------------------------------
The Breadth First Search (BFS) is an algorithm for traversing or searching
tree or graph data structures. It explores all the nodes at the present
depth before moving on to the nodes at the next depth level.


Pseudocode for BFS:
----------------------
• Create a queue (this can be an array) and a variable to store the value
  of nodes visited.
• Place the root node in the queue.
• Loop as long as there is anything in the queue.
    ○ Dequeue a node from the queue and push the value of the node into
      the variable that stores the nodes.
    ○ If there is a left property on the node dequeued - add it to the
      queue.
    ○ If there is a right property on the node dequeued - add it to the queue
• Return the variable that stores the values


DFS (Depth First Search):
----------------------------
Depth First Search (DFS) algorithm traverses a graph in a depthward motion
and uses a stack to remember to get the next vertex to start a search, when
a dead end occurs in any iteration.


There are three ways which we use to traverse a tree −

    1) In-order Traversal
    2) Pre-order Traversal
    3) Post-order Traversal


In-order Traversal:
-----------------------
In this traversal method, the left subtree is visited first, then the root
and later the right sub-tree. We should always remember that every node may
represent a subtree itself.


Pseudocode for DFS (In-order):
----------------------------------
• Create a variable to store the values of nodes visited.
• Place the root of the BST in a variable called current.
• Write a helper function which accepts a node
    ○ If the node has a left property, call the helper function with the left property
      on the node.
    ○ Push the value of the node to the variable that stores the values.
    ○ If there is a right property, call the helper function with the right property of
      one the node.
    ○ Invoke the helper function with the current variable.
• Return the array of values.


Pre-order Traversal:
-----------------------
In this traversal method, the root node is visited first, then the left subtree
and finally the right subtree.


Pseudocode for DFS (Pre-order):
----------------------------------
• Create a variable to store the values of nodes visited.
• Place the root of the BST in a variable called current.
• Write a helper function which accepts a node
    ○ Push the value of the node to the variable that stores the values.
    ○ If the node has a left property, call the helper function with the left property
      on the node.
    ○ If there is a right property, call the helper function with the right property of
      one the node.
• Invoke the helper function with the current variable.


Post-order Traversal:
-----------------------
In this traversal method, the root node is visited last, hence the name. First
we traverse the left subtree, then the right subtree and finally the root node.


Pseudocode for DFS (Post-order):
----------------------------------
• Create a variable to store the values of nodes visited.
• Place the root of the BST in a variable called current.
• Write a helper function which accepts a node
    ○ If the node has a left property, call the helper function with the left property
      on the node.
    ○ If there is a right property, call the helper function with the right property of
      one the node.
    ○ Push the value of the node to the variable that stores the values.
    ○ Invoke the helper function with the current variable.
• Return the array of values.

================================================================
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  push(val) {
    var newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    var current = this.root;

    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return undefined;

    var current = this.root;
    var found = false;

    if (val === current.val) {
      found = true;
    }

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }

  bfs() {
    if (this.root === null) return undefined;

    var queue = [];
    var result = [];

    queue.push(this.root);

    while (queue.length) {
      var dequeued = queue.shift();
      result.push(dequeued.val);

      if (dequeued.left) {
        queue.push(dequeued.left);
      }

      if (dequeued.right) {
        queue.push(dequeued.right);
      }
    }

    return result;
  }

  dfsPreOrder() {
    if (this.root === null) return undefined;

    var result = [];

    function helperFunc(node) {
      result.push(node.val);
      if (node.left) {
        helperFunc(node.left);
      }

      if (node.right) {
        helperFunc(node.right);
      }
    }

    helperFunc(this.root);

    return result;
  }

  dfsPostOrder() {
    if (this.root === null) return undefined;

    var result = [];

    function helperFunc(node) {
      if (node.left) {
        helperFunc(node.left);
      }

      if (node.right) {
        helperFunc(node.right);
      }

      result.push(node.val);
    }

    helperFunc(this.root);

    return result;
  }

  dfsInOrder() {}
}

var tree = new Tree();

tree.push(10);
tree.push(5);
tree.push(15);
tree.push(2);
tree.push(19);
tree.push(7);
tree.push(12);

// console.log(tree.find(19));

// console.log(tree.bfs());

// console.log(tree.dfsPreOrder());

console.log(tree.dfsPostOrder());

// console.log(tree);
