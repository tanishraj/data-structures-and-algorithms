/**
 * Write a program which should return the largest
 * number in an array
 */

var arr = [1, 2, 3, 4, 5, 66, 7, 8, 9, 10, 20, 11, 22, 44];

// Largest number
var largestNumber = Math.max(...arr); // max(1,2,3,4.....)
console.log(largestNumber);

// Second largest number
largestNumber = Math.max.apply(null, arr);
arr.splice(arr.indexOf(largestNumber), 1);
var secondLargestNumber = Math.max.apply(null, arr);

console.log(secondLargestNumber);
