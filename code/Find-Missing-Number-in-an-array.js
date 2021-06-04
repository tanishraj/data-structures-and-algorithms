/*
-------------------------------------------------------------------
Pseudo Code:
-----------------
1) Calculate the sum of first n natural numbers as sumtotal= n*(n+1)/2
2) Create a variable sum to store the sum of array elements.
3) Traverse the array from start to end.
4) Update the value of sum as sum = sum + array[i]
5) Print the missing number as sumtotal – sum

Complexity Analysis:
-------------------------
Time Complexity: O(n).
Only one traversal of the array is needed.
Space Complexity: O(1).
No extra space is needed
-------------------------------------------------------------------
*/

var arr = [1, 2, 4, 5, 6];

function findMissingNumber(arr) {
  var n = arr.length;
  var totalSum = Math.floor(((n + 1) * (n + 2)) / 2);

  var currentSum = arr.reduce((result, current) => {
    return result + current;
  }, 0);

  return totalSum - currentSum;
}

console.log(findMissingNumber(arr));

/*
-------------------------------------------------------------------
Pseudo Code:
-----------------
1) Create a variable sum = 1 to which will store the missing number and a counter c = 2.
2) Traverse the array from start to end.
3) Update the value of sum as sum = sum – array[i] + c and update c as c++.
4) Print the missing number as a sum.

Complexity Analysis:
-------------------------
Time Complexity: O(n).
Only one traversal of the array is needed.
Space Complexity: O(1).
No extra space is needed
-------------------------------------------------------------------
*/

function findMissingNumber2(arr) {
  var n = arr.length;
  var totalSum = Math.floor(((n + 1) * (n + 2)) / 2);

  var missingNum = arr.reduce((result, current) => {
    return totalSum - current;
  }, totalSum);

  return missingNum;
}

console.log(findMissingNumber2(arr));
