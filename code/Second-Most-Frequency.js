function secondFrequent(str) {
  var map = {};
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = (map[str[i]] || 0) + 1;
  }

  var freqArr = Object.keys(map).map((el) => [el, map[el]]);
  freqArr.sort((a, b) => b[1] - a[1]);
  return freqArr[1][0];
}

var str =
  "Hello world, I have never seen such a beautiful weather in the world";
console.log(secondFrequent(str));
