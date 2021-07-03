/*
================================================================

What is a Doubly Linked List:
--------------------------------
Almost identical to Singly Linked Lists, except every node
has another pointer, to the previous node!



Pushing PseudoCode:
----------------------
1) Create a new node with the value passed to the function.
2) If the head property is null set the head and tail to be the
newly created node.
3) If not, set the next property on the tail to be that node
4) Set the previous property on the newly created node to be
the tail.
5) Set the tail to be the newly created node.
6) Increment the length
7) Return the Doubly Linked List.



Popping PseudoCode:
----------------------
1) If there is no head, return undefined.
2) Store the current tail in a variable to return later.
3) If the length is 1, set the head and tail to be null.
4) Update the tail to be the previous node.
5) Set the newTail's next to null.
6) Decrement the length.
7) Return the value removed.



shifting PseudoCode:
----------------------
1) If length is 0, return undefined.
2) Store the current head property inn a variable
(we will call its old head)
3) If the length is one then set the head to be null and
set the tail to be null
4) Update the head to be the next of the old head.
5) Set the head's prev property to null.
6) Decrement the length
7) Decrement the length
8) Return old head



unshifting PseudoCode:
----------------------
1) Create a new node with the value passed to the function.
2) if the length is 0
    2.1) Set the head to be the new node.
    2.2) Set the tail to be the new node.
3) Otherwise
    3.1) Set the prev property on the head of the list to be the
    new node.
    3.2) Set the next property on the new node to be the head
    property.
    3.3) Update the head to be the new node.
4) Increment the length
5) Return the list.



get PseudoCode:
----------------------
1) If the index is less than 0 or greater or equal to the length,
return null.
2) If the index is less than or equal to half the length of the list
    2.1) Looop through the list from the head and loop towards
    the middle
    2.2) Return the node once it is found.
3) if the index is greater than half the length of the list.
    3.1) Loop through the list starting from the tail and loop
    towards the middle.
    3.2) Return the node once it is found.



set PseudoCode:
----------------------
1) Create a variable which is the result of the get method at the
index passed to the function.
2) If the get method returns a valid node, set the value of that node
to be the value passed to the function.
3) Return true.
4) Otherwise, return false



insert PseudoCode:
----------------------
1) If the index is less than zero or greater than or equal to
the length return false.
2) If the index is 0, unshift.
3) If the index is same as the length, push.
4) Use the get method to access the index - 1.
5) Set the next nad prev properties on the correct nodes to link
everything together.
6) Increment the length.
7) Return true.



remove PseudoCode:
----------------------
1) If the index is less than zero or greater than or equal to
the length return undefined.
2) If the index is 0, shift.
3) If the index is the same as the length - 1, pop.
4) Use the get method to retrieve the item to be removed.
5) Update the next and prev properties to remove the found node
from the list.
6) Set next and prev to null on the found node.
7)Decrement the length
8) Return the removed node.

================================================================
*/

class Node {
  constructor(val) {
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length -= 1;
    return poppedNode;
  }

  shift() {
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      current.next.prev = null;
      this.head = current.next;
      current.next = null;
    }

    this.length -= 1;
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
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
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let foundNode = this.get(index - 1);

    newNode.next = foundNode.next;
    newNode.prev = newNode;
    foundNode.next.prev = newNode;
    foundNode.next = newNode;

    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(index);
    if (index === this.length - 1) return this.pop(index);

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;

    this.length -= 1;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push(20);
list.push(40);
list.push(60);
list.push(80);
list.push(100);

console.log(list);
