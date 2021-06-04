function maxOccurance(str) {
  var charObj = {};
  for (let i = 0; i < str.length; i++) {
    charObj[str[i]] = charObj[str[i]] ? charObj[str[i]] + 1 : 1;
  }

  var max = 0;
  var maxChar = "";

  for (let item in charObj) {
    if (charObj[item] > max) {
      max = charObj[item];
      maxChar = item;
    }
  }

  console.log(maxChar);
}

var str = "abccccd";
console.log(maxOccurance(str));
