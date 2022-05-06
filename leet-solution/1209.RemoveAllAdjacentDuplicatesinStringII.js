/*
You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

Example 1:
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.

Example 2:
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation:
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

Example 3:
Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
*/

var s = "bpbcggttciiippooaais",
  k = 2;

s = "abcd";
k = 2;

s = "deeedbbcccbdaa";
k = 3;

s = "yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy";
k = 4;

s = "deeedbbcccbdaa";
k = 3;

// NAIVE APPROACH
var removeDuplicates = function (s, k) {
  var stringArray = s.split("");
  var start = 0;
  var partialString = stringArray[start];

  for (let step = start + 1; step < stringArray.length; step++) {
    if (stringArray[step] !== stringArray[start]) {
      start = step;
      partialString = stringArray[start];
    } else {
      partialString += stringArray[step];

      if (partialString.length === k) {
        stringArray.splice(start, k);
        start = 0;
        partialString = stringArray[start];
        step = start;
      }
    }
  }

  return stringArray.join("");
};

console.log(removeDuplicates(s, k));

// OPTIMIZED APPROACH USING 2 STACK
removeDuplicates = function (s, k) {
  var charStack = [];
  var countStack = [];

  for (var char of s) {
    if (char !== charStack[charStack.length - 1]) {
      charStack.push(char);
      countStack.push(1);
    } else {
      charStack.push(char);
      countStack[countStack.length - 1] += 1;
    }

    if (countStack[countStack.length - 1] === k) {
      charStack.length -= k;
      countStack.length -= 1;
    }
  }

  return charStack.join("");
};

console.log(removeDuplicates(s, k));
