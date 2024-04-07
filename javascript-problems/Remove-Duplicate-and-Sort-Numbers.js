// Approach 1:
function uniqueSorted(arr) {
  return Array.from(new Set(arr)).sort();
}

// Approach 2:
function uniqueSorted2(arr) {
  return arr.reduce((result, current) => {
    return (
      result.indexOf(current) === -1 ? result.concat(current) : result
    ).sort();
  }, []);
}

// Approach 3
function uniqueSorted3(arr) {
  var newObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (newObj[arr[i]]) {
      newObj[arr[i]] += 1;
    } else {
      newObj[arr[i]] = 1;
    }
  }
  return Object.keys(newObj).map((x) => +x);
}

// Approach 4
function uniqueSorted4(arr) {
  var newMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!newMap.get(arr[i])) {
      newMap.set(arr[i], 1);
    } else {
      newMap.set(arr[i], newMap.get(arr[i]) + 1);
    }
  }

  console.log(Object.entries(Object.fromEntries(newMap)));

  return newMap;
}

var arr = [5, 0, 0, 1, 1, 1, 2, 3, 3, 4, 4, 4];
// console.log(uniqueSorted(arr));
// console.log(uniqueSorted2(arr));
// console.log(uniqueSorted3(arr));
console.log(uniqueSorted4(arr));
