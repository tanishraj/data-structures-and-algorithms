// Move all negative numbers to beginning and positive to end with constant extra space

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

function rearrange(arr) {
  var j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i !== j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
  }
  return arr;
}

var input = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
console.log(rearrange(input));
