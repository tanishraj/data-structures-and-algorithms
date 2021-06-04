function maxWater(arr) {
  var maximum = 0;

  var i = 0;
  var j = arr.length - 1;

  while (i < j) {
    if (arr[i] < arr[j]) {
      maximum = Math.max(maximum, (j - i - 1) * arr[i]);
      i++;
    } else if (arr[j] < arr[i]) {
      maximum = Math.max(maximum, (j - i - 1) * arr[j]);
      j--;
    } else {
      maximum = Math.max(maximum, (j - i - 1) * arr[i]);
      i++;
      j--;
    }
  }

  return maximum;
}

// var arr = [4, 5, 2, 0, 6];
// var arr = [2, 1, 3, 4, 6, 5];
var arr = [4, 0, 2, 3, 4, 0, 5, 2, 0, 6];
console.log(maxWater(arr));
