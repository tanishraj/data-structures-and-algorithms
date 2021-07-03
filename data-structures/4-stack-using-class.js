/*
================================================================

What is Stack:
-------------------
A LIFO data structure.

The last element added to the stack will be the first element
removed from the stack.

Where stacks are used?
------------------------
1) Managing function invocationn
2) Undo/Redo
3) Routing (the history obbject) is treated like a stack


Note:
------
There are many more ways to implement a stack.



Pushing Pseudocode:
-----------------------
1) The function should accept a value.
2) Create a new nonde with the value.
3) If there are no nnodes inn the stack, set the first and last
property to be the newly created node.
4) If there is at least one node, create a variable that stores the
current first property on the stack.
5) Reset the first property to be the newly created nnode
6) Set the next property on the node to bbe the previously created
variable
7) Increment the size of the stack by 1.



Popping Pseudocode:
-----------------------
1) If there are no nodes in the stack, return null.
2) Create a temporary varibale to store the first property on the
stack.
3) If there is only 1 nonde, set the first and last property to be
null.
4) If there is more than one node, set the first property to be
the next property on the current first.
5) Decrement the size by 1.
6) Return the value of the node removed.

================================================================
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let current = this.first;
      this.first = newNode;
      this.first.next = current;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    let poppedNode = this.first;

    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size -= 1;
    return poppedNode;
  }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50); // should be deleted first
console.log(stack);
