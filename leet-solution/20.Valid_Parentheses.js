/**
 * 20. Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

function isValidParenthesis(str) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i of str) {
    console.log(i);
    if (i === ")" || i === "]" || i === "}") {
      if (stack.length === 0) {
        return false;
      }
      const last = stack.pop();
      if (i !== map[last]) {
        return false;
      }
    } else {
      stack.push(i);
    }
  }

  return true;
}

var s = "()[]{}";
// var s = "(]";
// var s = "()";

console.log(isValidParenthesis(s));
