function secondMaxOccurance(arr) {
  var map = arr.reduce((acc, val) => {
    if (acc.has(val)) {
      acc.set(val, acc.get(val) + 1);
    } else {
      acc.set(val, 1);
    }
    return acc;
  }, new Map());

  var frequencyArray = Array.from(map);
  return frequencyArray.sort((a, b) => {
    return b[1] - a[1];
  })[1][0];
}

var arr = [1, 34, 4, 3, 2, 1, 4, 6, 4, 6, 5, 3, 6, 6];
console.log(secondMaxOccurance(arr));

arr = ["aaa", "aaa", "bbb", "bbb", "bbb", "bbb", "ccc", "ccc", "ccc", "ccc"];
console.log(secondMaxOccurance(arr));
