/*
A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.



Example 1:

Input: n = "32"
Output: 3
Explanation: 10 + 11 + 11 = 32
Example 2:

Input: n = "82734"
Output: 8
Example 3:

Input: n = "27346209830709182346"
Output: 9

*/
var n = "32";
var n = "82734";
var n = "27346209830709182346";

// Naive Approach
var minPartitions = function (n) {
  var str = n.split("");
  var count = 0;
  var flag = false;

  while (str.join("") - 0 !== 0) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] - 0 > 0) {
        str[i] = str[i] - 1;
        flag = true;
      }
    }

    if (flag === true) {
      count++;
      flag = false;
    }
  }
  return count;
};

console.log(minPartitions(n));

// Optimized Approach
// So, as we can see that the each number to become 0,
// we have to reduce the number by 1 everytime, so
// the number of steps would be the highest number
// present in the string.

var minPartitions2 = function (n) {
  var max = n[0] - 0;

  for (let i = 0; i < n.length; i++) {
    if (n.charAt(i) - 0 > max) {
      max = n.charAt(i) - 0;
    }
  }

  return max;
};

console.log(minPartitions2(n));
