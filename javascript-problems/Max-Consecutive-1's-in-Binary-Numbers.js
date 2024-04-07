function maxOccurance(arr) {
  var count = 0;
  var max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count = 0;
    } else {
      count++;
    }

    if (max < count) {
      max = count;
    }
  }

  return max;
}

var arr = [0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1];
console.log(maxOccurance(arr));
