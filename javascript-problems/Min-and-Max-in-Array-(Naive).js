/*
====================================================================
METHOD 1 (Simple Linear Search)
Initialize values of min and max as minimum and maximum of
the first two elements respectively. Starting from 3rd, compare
each element with max and min, and change max and min
accordingly (i.e., if the element is smaller than min then
  change min, else if the element is greater than max then change
  max, else ignore the element)
====================================================================
*/

function minMax(arr) {
  const minmax = {};

  if (arr.length === 0) return undefined;

  minmax["min"] = arr[0];
  minmax["max"] = arr[0];

  if (arr.length === 1) {
    return minmax;
  }

  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      minmax["min"] = arr[1];
      minmax["max"] = arr[0];
    } else {
      minmax["min"] = arr[0];
      minmax["max"] = arr[1];
    }

    return minmax;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minmax.min) {
      minmax["min"] = arr[i];
    } else if (arr[i] > minmax.max) {
      minmax["max"] = arr[i];
    }
  }

  return minmax;
}

console.log(minMax([1000, 11, 445, 1, 330, 3000]));
