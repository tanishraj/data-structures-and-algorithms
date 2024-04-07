function secondMaxOccurance(arr) {
  var newObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (newObj[arr[i]]) {
      newObj[arr[i]] += 1;
    } else {
      newObj[arr[i]] = 1;
    }
  }

  var max = 0;
  var secondMax = 0;

  for (let item in newObj) {
    if (max === 0 && secondMax === 0) {
      max = newObj[item];
    }
    if (newObj[item] > max) {
      secondMax = max;
      max = newObj[item];
    } else if (newObj[item] > secondMax && newObj[item] < max) {
      secondMax = newObj[item];
    }
    // else {
    //   secondMax = newObj[item];
    // }
  }

  var filteredData = Object.keys(newObj).filter((data) => {
    return newObj[data] === secondMax;
  });

  console.log(newObj);

  return filteredData.length > 0
    ? filteredData
    : "No Second Max Data Available";
}

var arr = ["aaa", "ccc", "bbb"];
console.log(secondMaxOccurance(arr));

var str = "abacdeabgsbdsabcba";
console.log(secondMaxOccurance(str.split("")));
