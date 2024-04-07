// Extract Duplicates (Naive)
function extractDuplicates(arr) {
  var newArr = [];
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  for (let item in obj) {
    if (obj[item] > 1) {
      for (let i = 0; i < obj[item]; i++) {
        newArr.push(item - 0);
      }
    }
  }

  return newArr;
}

// Extract Duplicates (Optimized)
function extractDuplicates(arr) {
  var newArr = [];

  newArr = arr.filter((item, index, tempArr) => {
    return tempArr.filter((data) => data === item).length > 1;
  });

  return newArr;
}

// Extract Duplicates (Optimized O(N))
function extractDuplicates(arr) {
  var newArr = [];

  newArr = arr.filter(
    (data, index) =>
      arr.lastIndexOf(data) !== index || arr.indexOf(data) !== index
  );

  return newArr;
}

var arr = [1, 2, 3, 4, 5, 6, 3, 2, 5, 3]; // Output: [3,3,3,5,5,2,2]
console.log(extractDuplicates(arr));
