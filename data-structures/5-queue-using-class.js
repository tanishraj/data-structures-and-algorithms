/*
================================================================

Enqueue Pseudocode:
-----------------------
1) This function accepts some value.
2) Create a new nonde using that value passed to the function.
3) If there are no nodes in the queue, set this node to be the
first and last property of the queue.



Dequeue Pseudocode:
-----------------------
1) If there is no first property, just return null.
2) Store the first property in a variable.
3) See if the first is the same as the last (check if there is
only 1 node). If so, set teh first and last node to be null.
4) If there is more than 1 node, set the first property to
be the next property of first.
5) Decrement the size by 1.
6) Return the value of the node dequeued.

================================================================
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let currentNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;
    return currentNode.value;
  }
}

let queue = new Queue();
