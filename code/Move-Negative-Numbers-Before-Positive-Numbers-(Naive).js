// Move all negative numbers to beginning and positive to end with constant extra space

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

function rearrange(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      var temp = arr[i];
      arr.splice(i, 1);
      arr.push(temp);
    }
  }
  return arr;
}

var input = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
console.log(rearrange(input));
