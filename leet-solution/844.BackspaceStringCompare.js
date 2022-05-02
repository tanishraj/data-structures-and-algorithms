/**
 Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
 Note that after backspacing an empty text, the text will continue empty.
 Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// const s = 'ab#c';
// const t = 'ad#c';

const s = "a#c";
const t = "b";

const backspaceString = function (str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "#") {
      stack.push(str[i]);
    } else {
      stack.pop(str[i]);
    }
  }

  return stack.join("");
};

const backspaceCompare = function (s, t) {
  var first = backspaceString(s);
  var second = backspaceString(t);

  if (first === second) {
    return true;
  }

  return false;
};

console.log(backspaceCompare(s, t));
