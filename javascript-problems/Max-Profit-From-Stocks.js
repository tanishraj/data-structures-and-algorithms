function maxProfixFromStcoks(arr) {
  var maxProfit = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var temp = 0;
      if (arr[i] < arr[j]) {
        temp = arr[j] - arr[i];
      }

      if (temp > maxProfit) {
        maxProfit = temp;
      }
    }
  }

  return maxProfit;
}

// var arr = [7,1,5,3,6,4]; // 5
var arr = [7, 6, 4, 3, 1]; // 0
console.log(maxProfixFromStcoks(arr));

// Time Complexity: O(N^2)

// =========================================

function maxProfixFromStcoks2(arr) {
  var maxProfit = 0;

  var start = 0;

  for (var i = 1; i < arr.length; i++) {
    var temp = 0;
    if (arr[i] < arr[start]) {
      start++;
    } else {
      temp = arr[i] - arr[start];
    }

    if (temp > maxProfit) {
      maxProfit = temp;
    }
  }

  return maxProfit;
}

var arr2 = [7, 1, 5, 3, 6, 4]; // 5
// var arr2 = [7,6,4,3,1]; // 0
console.log(maxProfixFromStcoks2(arr2));

// Time Complexity: O(N)
