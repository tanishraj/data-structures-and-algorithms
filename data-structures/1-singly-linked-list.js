/*
================================================================

What is a Linked List:
----------------------
A data structure that contains a head, tail and length property.
Linnked lists consist of nodes and each nonde has a value and a
pointer to another node or null.


Pushing PseudoCode:
----------------------
1) This function should accept a value.
2) Create a new node using the value passed to the function.
3) If there is no head property on the list, set the head and
tail to be the newly created node.
4) Otherwise set the next property onn the tails to be the new
nonde and set the tail property on the list to be the newly
created node.
5) Increment the length by one.
6) Return the list.


Popping PseudoCode:
----------------------
1) If there are no nodes in the list, return undefined.
2) Loop through the list until you reach the tail.
3) Set the next property of the 2nd to last node to be null
4) Set the tail to be the 2nd to last node.
5) Decrement the length of the list by 1.
6) Return the value of the node removed.


Shifting PseudoCode:
----------------------
1) If there are no nodes in the list, return undefined.
2) Store the current head property in a variable.
3) Set the head property to the current head's nnext property
4) Decrement the length of the list by 1.
5) Return the value of the node removed.



Unshifting PseudoCode:
----------------------
1) This function should accept a value.
2) Create a new node using the value passed to the function.
3) If there is non head property on the list, set the head
and tail to be the newly created node.
4) Otherwise, set the newly created node's next property to
be the current head property on the list.
5) Increment the length of the list by 1.
6) Return the linked list.




get method PseudoCode:
-------------------------
1) This function should accept an index
2) If the index is less than zero or greater than or equal to
the length of the list, return null
3) Loop through the list until you reach the index and return
the node at the specific index.



set method PseudoCode:
-------------------------
1) This function should accept a value and an index
2) Use your get function to find the specific node
3) If the node is not found, return false
4) If the node is found, set the value of that node to be the
value passed to the function and return true




insert method PseudoCode:
----------------------------
1) If the index is less than zero or greater than the length,
return false
2) If the index is the same as the length, push a new node to
the end of the list.
3) If the index is 0, unshift a new node to the start of the list.
4) Otherwise, using the get method, access the node at the index -1.
5) Set the next property on that node to be the new node.
6) Set the new property on the new node to be the previous next
7) Increment the length
8) Return true



remove method PseudoCode:
----------------------------
1) if the index is less than zero or greater than the length,
return undefined.
2) If the index is the same as the length-1, pop.
3) If the index is 0, shift.
4) Otherwise, using the get method, access the node at the
index - 1.
5) Set the next property on that node to be the next of the
next node.
6) Decrement the length
7) Return the values of the node removed.



reverse method PseudoCode:
----------------------------
1) Swapt the head and tail
2) Create a variable called next
3) Create a variable called prev
4) Create a variable called node and initialize it to the head
property
5) Loop through the list
6) Set next to be the next property on whatever nonde is
7) Set the next property on the node to be whatever prev is
8) Set prev to be the values of the node variable
9) Set the node variable to be the value of the next variable.

================================================================
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (this.length === 0) return undefined;
    var current = this.head;
    var newHead = current;
    this.head.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = newNode;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop(val);
    }
    if (index === 0) {
      return this.shift(val);
    }
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length -= 1;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

// Below is not the best practice in order to add the linked items
// var first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('How');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

var list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);

console.log(list);
