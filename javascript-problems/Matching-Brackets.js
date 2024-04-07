function isMatchingBrackets(str) {
  var stack = [];
  var map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (var i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      stack.push(str[i]);
    } else {
      var temp = stack.pop();
      if (map[temp] !== str[i]) {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return true;
}

var str = "(){}";
var str2 =
  "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]";
var str3 = "({(()))}}";

console.log(isMatchingBrackets(str)); // returns true
console.log(isMatchingBrackets(str2)); // returns true
console.log(isMatchingBrackets(str3)); // returns false
