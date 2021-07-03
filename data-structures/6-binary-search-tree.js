/*
================================================================

Binary Search Trees:
----------------------
Binary Search Tree is a tree-like data structure that branches
from a parent node to its child nodes. There are few properties
that makes binary search tree a little bit different from other
types of trees:

• Each node (parent node) can only have up to 2 child nodes.
• The two child nodes are often referred to as left child and 
    right child where the value of the left child is always less than
    the parent and the right child is always greater than equal
    to the parent.
• Each child must also be a binary search tree.



Pseudocode for inserting a node:
-----------------------------------
• Create a new node.
• Starting at the root.
    ○ Check if there is a root, if not - the root now becomes that new node!
    ○ If there is a root, check if the value of the new node is greater than or less than the value of the root.
    ○ If it is greater
        § Check to see if there is a node to the right.
        § If there is not, add that node as the right property.
    ○ If it is less
        § Check to see if there is a node to the left.
If there is not, add that node as the left property.



Pseudocode for finding a node in BST:
----------------------------------------
• Starting at the root.
    ○ Check if there is a root, if not - we are done searching.
    ○ If there is a root, check is the value of the new node is the value we are looking for
      If we found it, we are done.
    ○ If not, check to see if the value is greater than or less than the value of the root.
    ○ If it is greater
        § Check to see if there is a node to the right
            § If there is, move to that node and repeat the steps.
            § If there is not, we are done searching.
    ○ If it is less
        § Check to see if there is a node to the left
            § If there is, move to that node and repeat the steps.
            § If there is not, we are done searching.


Complexity:
--------------
Time Complexity (Insertion): O(log n);
Time Complexity (Seraching): O(log n);

================================================================
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
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
}

let tree = new binarySearchTree();
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(25);
tree.insert(20);
tree.insert(12);
tree.insert(5);
tree.insert(15);
tree.insert(35);
tree.insert(25);

console.log(tree);
