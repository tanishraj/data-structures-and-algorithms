/*
---------------------------------------------------------------
METHOD 2 (Tournament Method)
Divide the array into two parts and compare the maximums
and minimums of the two parts to get the maximum and the
minimum of the whole array.

---------------------------------------------------------------
Pair MaxMin(array, array_size)
   if array_size = 1
      return element as both max and min
   else if arry_size = 2
      one comparison to determine max and min
      return that pair
   else    => array_size  > 2
   recur for max and min of left half
   recur for max and min of right half
   one comparison determines true max of the two candidates
   one comparison determines true min of the two candidates
   return the pair of max and min
---------------------------------------------------------------
*/

function getMinMax(arr, low, high) {
  const minmax = {};
  var minmaxLeft = {};
  var minmaxRight = {};

  // If there is only one element
  if (low === high) {
    minmax["min"] = arr[low];
    minmax["max"] = arr[low];
    return minmax;
  }

  /* If there are two elements */
  if (high === low + 1) {
    if (arr[low] > arr[high]) {
      minmax["max"] = arr[low];
      minmax["min"] = arr[high];
    } else {
      minmax["max"] = arr[high];
      minmax["min"] = arr[low];
    }
    return minmax;
  }

  /* If there are more than 2 elements */
  var mid = Math.floor((low + high) / 2);
  minmaxLeft = { ...getMinMax(arr, low, mid) };
  minmaxRight = { ...getMinMax(arr, mid + 1, high) };

  /* compare minimums of two parts*/
  if (minmaxLeft["min"] < minmaxRight["min"]) {
    minmax["min"] = minmaxLeft["min"];
  } else {
    minmax["min"] = minmaxRight["min"];
  }

  /* compare maximums of two parts*/
  if (minmaxLeft["max"] > minmaxRight["max"]) {
    minmax["max"] = minmaxLeft["max"];
  } else {
    minmax["max"] = minmaxRight["max"];
  }

  return minmax;
}

var arr = [1000, 11, 445, 1, 330, 3000];
var low = 0;
var high = arr.length - 1;
console.log(getMinMax(arr, low, high));
