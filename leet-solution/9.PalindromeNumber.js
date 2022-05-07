/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.


Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

var x = 121;

var isPalindrome = function (x) {
  var str = String(x);
  var start = 0;
  var end = str.length - 1;
  while (start < end) {
    var last = end - start;
    if (str[last] !== str[start]) {
      return false;
    }
    start++;
  }

  return true;
};

console.log(isPalindrome(x));

// OPTIMIZED APPROACH
isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  if (x >= 0 && x <= 9) {
    return true;
  }

  var input = x;
  var result = 0;

  while (input !== 0) {
    result = result * 10 + (input % 10);
    input = Math.floor(input / 10);
  }

  return result === x;
};

console.log(isPalindrome(x));
