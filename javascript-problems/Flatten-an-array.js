/**
 * Flattenning an array with builtin methods and
 * without builtin methods
 */

var arr = [1, [2, 3], [4, 5, 6, [7, 8, [9, 10]]], 11, 12];

// Its an experimental feature so you can not use it as of now.
console.log(arr.flat());

// Without using builtin methods
function flattenArray(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flattenArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(flattenArray(arr));

// Using reduce methods
function flattenUsingReduce(arr) {
  return arr.reduce((result, currentVal) => {
    return result.concat(
      Array.isArray(currentVal) ? flattenUsingReduce(currentVal) : currentVal
    );
  }, []);
}

console.log(flattenUsingReduce(arr));
