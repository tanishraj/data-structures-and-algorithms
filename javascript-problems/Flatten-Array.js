function flatArray(arr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var arr = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10, [[[[11]]]]]]]];
console.log(flatArray(arr));

// Using Reduce Method
function flatArrayUsingreduce(arr) {
  return arr.reduce((result, current) => {
    return result.concat(Array.isArray(current) ? flatArray(current) : current);
  }, []);
}

console.log(flatArrayUsingreduce(arr));
