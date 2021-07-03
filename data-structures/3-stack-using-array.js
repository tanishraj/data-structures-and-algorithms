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



================================================================
*/

let stack = [];

stack.unshift("First Item");
stack.unshift("Second Item");
stack.unshift("Third Item");
stack.unshift("Fourth Item");
stack.unshift("Fifth Item");

console.log(stack);
// ["Fifth Item", "Fourth Item", "Third Item", "Second Item", "First Item"]

stack.shift();

console.log(stack);
// ["Fourth Item", "Third Item", "Second Item", "First Item"]
