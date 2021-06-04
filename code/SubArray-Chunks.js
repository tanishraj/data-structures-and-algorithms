/*
Given an array and chunk size, convert the array in to
subarrays containing number of elements of chunk sizes

Example:
chunkOfArray([1,2,3,4], 2); // [[1,2],[3,4]]
chunkOfArray([1,2,3,4,5], 2); // [[1,2],[3,4],[5]]
chunkOfArray([1,2,3,4,5], 2); // [[1,2],[3,4],[5]]
*/

function chunkOfArray(arr, chunkSize) {
  var newArr = [];
  var count = 0;
  var subArr = [];

  for (let i = 0; i < arr.length; i++) {
    count++;
    subArr.push(arr[i]);

    if (count === chunkSize) {
      newArr.push(subArr);
      count = 0;
      subArr = [];
    }
  }

  newArr.push(subArr);

  return newArr;
}

// var arr = [1, 2, 3, 4];
// var arr = [1, 2, 3, 4, 5];
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(chunkOfArray(arr, 3));

/*
Time Complexity: O(n)
*/

function chunkOfArray2(arr, chunkSize) {
  var newArr = [];
  while (arr.length !== 0) {
    newArr.push(arr.splice(0, chunkSize));
  }

  return newArr;
}

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(chunkOfArray2(arr2, 3));
